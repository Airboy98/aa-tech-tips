import { useState } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

const AppointmentForm = () => {
  const { dispatch } = useAppointmentsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSumbit = async (e) => {
    e.preventDefault();

    const appointment = { title, load, reps };

    const response = await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new appointment added", json);
      dispatch({ type: "CREATE_APPOINTMENT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSumbit}>
      <h3>Request an Appointment</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AppointmentForm;
