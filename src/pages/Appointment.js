import { useEffect } from "react";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";

// components
import AppointmentDetails from "../components/AppointmentDetails";
import AppointmentForm from "../components/AppointmentForm";
import Collapsible from "react-collapsible";
import Calendly from "../components/Calendly";

export default function Appointment() {
  const { appointments, dispatch } = useAppointmentsContext();

  return (
    <>
      <h1>Appointment</h1>
      <hr></hr>

      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            In-Person Appointment Details
          </button>
        }
      >
        <h3>$75/hr (cash or check)</h3>
        <h4>
          For the most extensive IT assistance, I can assist via an in-person IT
          appointment and come over to a local DFW address of your choosing to
          help with various IT issues such as:
        </h4>
        <ul>
          <li>
            Comprehensive IT Lessons (ex: learn how to use a smartphone, tablet,
            macOS, etc.)
          </li>
          <li>
            Data Backup (external SSD not provided, refer to Tech 101 for
            retailers)
          </li>
          <li>Data Transfer</li>
          <li>
            New Device Setup (smartphone, TV, printer, home network, etc.)
          </li>
          <li>Program/App Installation or Removal</li>
          <li>Malware/Virus Removal</li>
          <li>Any other tech related issues</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">
            Remote Appointment Details
          </button>
        }
      >
        <h3>$50/hr (Zelle or Apple Pay)</h3>
        <h4>
          For more limited assistance, I can assist remotely via Zoom (refer to
          Tech 101 for instructions) to help with basic IT issues such as:
        </h4>
        <ul>
          <li>
            Basic IT Lessons (ex: organize files and folders, use programs like
            MS Office, web browser, etc.)
          </li>
          <li>Data Transfer (flash/thumb drive required)</li>
          <li>Program/App Installation or Removal</li>
          <li>Malware/Virus Removal</li>
          <li>Any tech related questions</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Book Appointment</button>
        }
      >
        <Calendly />
      </Collapsible>
      <h5>
        Send any appointment inquiries to{" "}
        <a href="mailto:appointment@aatechtips.com">
          appointment@aatechtips.com
        </a>
      </h5>
      {/* <div className="appointments">
        {appointments &&
          appointments.map((appointment) => (
            <AppointmentDetails
              key={appointment._id}
              appointment={appointment}
            />
          ))}
      </div>
      <AppointmentForm /> */}
    </>
  );
}
