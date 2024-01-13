import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

// data fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AppointmentDetails = ({ appointment }) => {
  const { dispatch } = useAppointmentsContext();

  const handleClick = async () => {
    const response = await fetch("/api/appointments/" + appointment._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_APPOINTMENT", payload: json });
    }
  };

  return (
    <div className="appointment-details">
      <h4>{appointment.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {appointment.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {appointment.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(appointment.createdAt), {
          addSuffix: true,
        })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default AppointmentDetails;
