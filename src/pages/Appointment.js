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
      <div className="section-header">
        <h1>Appointment</h1>
      </div>
      <h2>Details</h2>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Basic Consultation</button>
        }
      >
        <h3>Free!</h3>
        <h4>
          To find out how I can assist further, send an email to{" "}
          <a href="mailto:appointment@aatechtips.com">
            appointment@aatechtips.com
          </a>{" "}
          for a free email consultation to gather information about your IT
          issues and determine the next best course of action:
        </h4>
        <ul>
          <li>
            Generic IT questions such as purchasing a new device, updating, etc.
          </li>
          <li>Information about your hardware/software</li>
          <li>
            Clarifying if an in-person or remote appointment is suitable for
            your situation
          </li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">In-Person</button>}
      >
        <h1>
          Instructional Package
          <span class="subtitle">
            <u>Learn while resolving</u> your tech issues step-by-step
          </span>
          <span class="subtitle">Zelle, Apple Pay, Cash or Check</span>
          <span class="subtitle">$100/hr</span>
        </h1>
        <h4>
          For the most comprehensive IT assistance, I offer one-on-one sessions
          with clear, step-by-step instructions to help with...
        </h4>
        <ul>
          <li>
            Informational IT Lessons (ex: learn how to use a smartphone, tablet,
            macOS, etc.)
          </li>
          <li>Specific program training (ex: MS Office products)</li>
          <li>
            Data Backup/Transfer (external SSD not provided, refer to Tech 101
            for retailers)
          </li>
          <li>
            New Device Setup (smartphone, TV, printer, home network, etc.)
          </li>
          <li>Program/App Installation or Removal</li>
          <li>Malware/Virus Removal</li>
          <li>Other tech teaching topics</li>
        </ul>
        <h1>
          Direct Package
          <span class="subtitle">
            Fast, no-fuss IT support — <u>I handle it for you</u>
          </span>
          <span class="subtitle">Zelle, Apple Pay, Cash or Check</span>
          <span class="subtitle">$75/hr</span>
        </h1>
        <h4>
          For the quickest resolution, I can directly address your IT issues
          with minimal interaction to help with...
        </h4>
        <ul>
          <li>Device Setup (smartphone, TV, printer, home network, etc.)</li>
          <li>Malware/Virus Removal</li>
          <li>Account Setup (email inbox, Microsoft 365, etc.)</li>
          <li>Other tech troubleshooting</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Virtual</button>}
      >
        <h1>
          Virtual Package
          <span class="subtitle">
            Convenient remote help from <u>anywhere</u>
          </span>
          <span class="subtitle">Zelle or Apple Pay</span>
          <span class="subtitle">$50/hr</span>
        </h1>
        <h4>
          For remote assistance, I can connect with you via Zoom (see Tech 101
          for instructions) to help with...
        </h4>
        <ul>
          <li>
            Basic IT Lessons (ex: organize files and folders, use programs like
            MS Office, web browser, etc.)
          </li>
          <li>Data Transfer (flash/thumb drive required)</li>
          <li>Program/App Installation or Removal</li>
          <li>Any tech related questions</li>
        </ul>
      </Collapsible>
      <h2>Booking</h2>
      <Collapsible
        trigger={<button className="collapsible-trigger">Schedule</button>}
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
