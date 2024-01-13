import { useEffect } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

// components
import AppointmentDetails from "../components/AppointmentDetails";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointment() {
  const { appointments, dispatch } = useAppointmentsContext();

  return (
    <>
      <h1>Appointment</h1>
      <hr></hr>
      <div className="workouts">
        {appointments &&
          appointments.map((appointment) => (
            <AppointmentDetails
              key={appointment._id}
              appointment={appointment}
            />
          ))}
      </div>
      <AppointmentForm />
    </>
  );
}
