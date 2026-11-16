export default function formatDate(value, fallback = "Unknown") {
  if (!value) return fallback;
  if (typeof value === "number") {
    value = new Date(value * 1000).toISOString().slice(0, 10);
  }
  const [year, month, day] = String(value).split("-");
  if (!month) return year;
  return new Date(Date.UTC(year, month - 1, day || 1)).toLocaleDateString(
    "en-US",
    {
      month: "short",
      ...(day && { day: "numeric" }),
      year: "numeric",
      timeZone: "UTC",
    }
  );
}
