import Collapsible from "react-collapsible";

export default function Internet() {
  return (
    <>
      <h1>Internet Troubleshooting</h1>
      <Collapsible
        trigger={<h2 className="collapsible-trigger">Internet Browsers</h2>}
      >
        <h3>Safari</h3>
        <h3>Internet Explorer</h3>
        <h3>Edge</h3>
        <h3>Google Chrome</h3>
        <h3>Firefox</h3>
        <h3>Opera</h3>
        <h3>Brave</h3>
      </Collapsible>
    </>
  );
}
