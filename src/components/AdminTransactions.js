import React, { useEffect, useState } from "react";

const TYPES = ["In-person", "Remote"];
const PACKAGES = [
  "",
  "Instructional",
  "Direct",
  "Purchase Assistance",
  "Digitization",
  "Computer Servicing",
  "Remote",
  "Zoom Call",
];
const CATEGORIES = [
  "Advertising & printing",
  "Website & hosting",
  "Software & subscriptions",
  "Equipment",
  "Supplies",
  "Phone & internet",
  "Education",
  "Other",
];

// IRS business standard mileage rates, by the date they took effect.
const MILEAGE_RATES = [
  ["2024-01-01", 0.67],
  ["2025-01-01", 0.7],
  ["2026-01-01", 0.725],
  ["2026-07-01", 0.76],
];
const mileageRate = (date) =>
  MILEAGE_RATES.filter(([from]) => date >= from).pop()?.[1] || 0;

const money = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });
const formatDate = (d) => {
  const [y, m, day] = d.split("-");
  return `${+m}/${+day}/${y}`;
};
const num = (v) => (v === "" || v == null ? null : Number(v));
const calcFee = (f) =>
  f.rate !== "" && f.rate != null && f.hours !== "" && f.hours != null
    ? Number(f.rate) * Number(f.hours)
    : null;
const withCurrent = (options, value) =>
  value && !options.includes(value) ? [...options, value] : options;

const KINDS = {
  income: {
    amountKey: "fee",
    columns: [
      { key: "date", label: "Date", input: "date" },
      { key: "type", label: "Type", input: "select", options: TYPES },
      { key: "package", label: "Package", input: "select", options: PACKAGES },
      { key: "client", label: "Client" },
      { key: "details", label: "Details", input: "textarea" },
      { key: "miles", label: "Miles", input: "number", empty: "N/A" },
      { key: "rate", label: "Rate", input: "number", money: true },
      { key: "hours", label: "Hours", input: "number" },
      { key: "fee", label: "Fee", input: "number", money: true, amount: true },
    ],
    blank: { type: "In-person", package: "" },
  },
  expense: {
    amountKey: "amount",
    columns: [
      { key: "date", label: "Date", input: "date" },
      { key: "vendor", label: "Vendor" },
      { key: "category", label: "Category", input: "select", options: CATEGORIES },
      { key: "description", label: "Description", input: "textarea" },
      { key: "amount", label: "Amount", input: "number", money: true, amount: true },
    ],
    blank: { category: CATEGORIES[0] },
  },
};

const display = (col, value) => {
  if (value == null || value === "") return col.empty || "";
  if (col.input === "date") return formatDate(value);
  if (col.money) return money(value);
  return value;
};

export default function AdminTransactions({ adminPassword, hidden }) {
  const [data, setData] = useState({ income: [], expense: [] });
  const [status, setStatus] = useState("loading");
  const [kind, setKind] = useState("income");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const { columns, amountKey, blank } = KINDS[kind];

  const api = (action, body) =>
    fetch(`/api/admin?resource=transactions&action=${action}&kind=${kind}`, {
      method: body ? "POST" : "GET",
      headers: {
        "x-admin-password": adminPassword,
        ...(body && { "Content-Type": "application/json" }),
      },
      body: body && JSON.stringify(body),
    }).then((res) => (res.ok ? res.json() : Promise.reject()));

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/admin?resource=transactions&action=list", {
      headers: { "x-admin-password": adminPassword },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((res) => {
        setData({ income: res.transactions, expense: res.expenses });
        setStatus("done");
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setStatus("error");
      });
    return () => controller.abort();
  }, [adminPassword]);

  const inYear = (items) =>
    year === "all" ? items : items.filter((t) => t.date.startsWith(year));
  const income = inYear(data.income);
  const expenses = inYear(data.expense);
  const shown = kind === "income" ? income : expenses;

  const years = [
    ...new Set([
      String(new Date().getFullYear()),
      ...[...data.income, ...data.expense].map((t) => t.date.slice(0, 4)),
    ]),
  ].sort((a, b) => b.localeCompare(a));

  const sum = (items, fn) => items.reduce((s, t) => s + (fn(t) || 0), 0);
  const totalIncome = sum(income, (t) => t.fee);
  const totalExpenses = sum(expenses, (t) => t.amount);
  const totalMiles = sum(income, (t) => t.miles);
  const mileageDeduction = sum(income, (t) => (t.miles || 0) * mileageRate(t.date));
  const totalHours = sum(income, (t) => t.hours);

  const adding = editing && !editing._id;

  const startAdd = () =>
    setEditing(
      adding
        ? null
        : {
            ...Object.fromEntries(columns.map((c) => [c.key, ""])),
            ...blank,
            date: new Date().toLocaleDateString("en-CA"),
          },
    );

  const edit = (t) =>
    setEditing({
      ...Object.fromEntries(columns.map((c) => [c.key, t[c.key] ?? ""])),
      _id: t._id,
    });

  const setEditField = (key) => (e) =>
    setEditing((f) => ({ ...f, [key]: e.target.value }));

  const saveEdit = async () => {
    setSaving(true);
    const payload = { ...editing };
    columns
      .filter((c) => c.input === "number")
      .forEach((c) => (payload[c.key] = num(editing[c.key])));
    if (kind === "income") payload.fee ??= calcFee(editing);
    try {
      const { item } = await api("save", payload);
      setData((prev) => ({
        ...prev,
        [kind]: [item, ...prev[kind].filter((t) => t._id !== item._id)].sort(
          (a, b) => b.date.localeCompare(a.date),
        ),
      }));
      setEditing(null);
    } catch {
      alert(`Couldn't save. Make sure a date and ${amountKey} are filled in.`);
    }
    setSaving(false);
  };

  const remove = async (t) => {
    const who = t.client || t.vendor || "this";
    if (!window.confirm(`Delete ${who} on ${formatDate(t.date)}?`)) return;
    await api("delete", { _id: t._id });
    setData((prev) => ({
      ...prev,
      [kind]: prev[kind].filter((x) => x._id !== t._id),
    }));
  };

  const renderInput = (col) => {
    const props = {
      className: `admin-tx-input${col.input === "number" ? " admin-tx-num" : ""}`,
      value: editing[col.key],
      onChange: setEditField(col.key),
    };
    if (col.input === "select")
      return (
        <select {...props}>
          {withCurrent(col.options, editing[col.key]).map((o) => (
            <option key={o} value={o}>
              {o || "None"}
            </option>
          ))}
        </select>
      );
    if (col.input === "textarea") return <textarea {...props} />;
    const fee = col.key === "fee" ? calcFee(editing) : null;
    return (
      <input
        {...props}
        type={col.input || "text"}
        step={col.input === "number" ? "any" : undefined}
        placeholder={fee != null ? String(fee) : undefined}
      />
    );
  };

  const renderEditRow = (key) => (
    <tr key={key} className="admin-tx-editing">
      {columns.map((col) => (
        <td
          key={col.key}
          data-label={col.label}
          className={col.input === "textarea" ? "admin-tx-details" : undefined}
        >
          {renderInput(col)}
        </td>
      ))}
      <td className="admin-tx-actions">
        <button
          className={`admin-session-edit-save${key === "new" ? " admin-tx-save-wide" : ""}`}
          onClick={saveEdit}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save"}
        </button>
        {key !== "new" && (
          <button
            className="admin-session-edit-cancel"
            onClick={() => setEditing(null)}
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );

  return (
    <div
      className="admin-panels"
      style={hidden ? { display: "none" } : undefined}
    >
      <div className="admin-tx">
        <div className="admin-tx-toolbar">
          <div className="admin-tx-kinds" role="tablist">
            {[
              ["income", "Income"],
              ["expense", "Expenses"],
            ].map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={kind === key}
                className={`admin-tx-kind${kind === key ? " admin-tx-kind--active" : ""}`}
                onClick={() => {
                  setKind(key);
                  setEditing(null);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="admin-tx-toolbar-right">
            <select
              className="admin-tx-input admin-tx-year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
              <option value="all">All years</option>
            </select>
            <button className="admin-tx-add" onClick={startAdd}>
              {adding ? "Cancel" : "+ Add"}
            </button>
          </div>
        </div>

        <div className="admin-tx-totals">
          {(kind === "income"
            ? [
                ["Income", money(totalIncome)],
                ["Sessions", income.length],
                ["Hours", +totalHours.toFixed(2)],
                ["Miles", totalMiles.toLocaleString()],
              ]
            : [
                ["Expenses", money(totalExpenses)],
                ["Mileage deduction", money(mileageDeduction)],
                ["Total deductions", money(totalExpenses + mileageDeduction)],
                ["Net", money(totalIncome - totalExpenses - mileageDeduction)],
              ]
          ).map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        {status === "loading" && (
          <p className="admin-session-empty">Loading transactions...</p>
        )}
        {status === "error" && (
          <p className="admin-session-empty">Couldn't load transactions.</p>
        )}

        {status === "done" && (
          <table className="admin-tx-table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key}>{col.label}</th>
                ))}
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {adding && renderEditRow("new")}
              {shown.map((t) =>
                editing?._id === t._id ? (
                  renderEditRow(t._id)
                ) : (
                  <tr key={t._id}>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        data-label={col.label}
                        className={
                          col.amount
                            ? `admin-tx-amount admin-tx-amount--${kind}`
                            : col.input === "textarea"
                              ? "admin-tx-details"
                              : undefined
                        }
                      >
                        {display(col, t[col.key])}
                      </td>
                    ))}
                    <td className="admin-tx-actions">
                      <button
                        className="admin-session-edit-cancel"
                        onClick={() => edit(t)}
                      >
                        Edit
                      </button>
                      <button
                        className="admin-appt-cancel-btn"
                        onClick={() => remove(t)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ),
              )}
              {shown.length === 0 && !adding && (
                <tr>
                  <td colSpan={columns.length + 1} className="admin-tx-empty">
                    No {kind === "income" ? "income" : "expenses"} for this
                    year yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
