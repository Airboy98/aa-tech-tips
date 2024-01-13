import Collapsible from "react-collapsible";

export default function Internet() {
  return (
    <>
      <h1>Internet</h1>
      <hr></hr>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Internet Browsers</button>
        }
      >
        {/* <table>
          <tr>
            <th>Browser Name</th>
            <th>Icon</th>
            <th>macOS Compatible?</th>
            <th>Windows Compatible?</th>
            <th>Still Updated?</th>
          </tr>
          <tr>
            <td>Safari</td>
            <td>insert icon</td>
            <td bg-color="red">t</td>
            <td>t</td>
            <td>t</td>
          </tr>
        </table> */}
        <h3>Safari</h3>
        <h3>Internet Explorer</h3>
        <h3>Microsoft Edge</h3>
        <h3>Google Chrome</h3>
        <h3>Mozilla Firefox</h3>
        <h3>Opera</h3>
        <h3>Brave</h3>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Installing Extensions</button>
        }
      ></Collapsible>
    </>
  );
}
