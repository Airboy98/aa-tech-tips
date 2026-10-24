import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="section-header">
        <h1>Page Not Found</h1>
      </div>
      <h4>
        Sorry, we couldn't find that page. It may have moved or no longer
        exists.
      </h4>
    </>
  );
}
