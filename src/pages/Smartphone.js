import Collapsible from "react-collapsible";

export default function Smartphone() {
  return (
    <>
      <h1>Smartphone</h1>
      <hr></hr>
      <h1>iPhone</h1>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        {/* <table>
            <tr>
              <th>iPhone Steps</th>
              <th>Android Steps</th>
            </tr>
          </table> */}
        <ol>
          <li>
            Open the <b>Photos</b> app
          </li>
          <li>Select the photo you'd like to edit</li>
          <li>Tap the EDIT button in top right corner</li>
          <li>
            Swipe through the setting circles on the bottom and use the slider
            to modify
          </li>
          <li>Tap filters at the bottom to select a filter</li>
          <li>
            Tap crop to trim the photo down to size by dragging the corners
          </li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Shared Photo Album</button>
        }
      >
        <ol>
          <li>
            Open the <b>Photos</b> app
          </li>
          <li>Select the photo you'd like to share</li>
          <li>
            Tap the share icon (square with up arrow) in bottom left corner
          </li>
          <li>Tap the ADD TO SHARED ALBUM button in list</li>
          <li>Type a comment to add (optional)</li>
          <li>
            Tap SHARED ALBUM to select a pre-existing album or create a new one
          </li>
        </ol>
        <h5>
          NOTE: The above feature is available for the latest iOS and may not be
          available on older versions
        </h5>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Timed Picture Capture</button>
        }
      >
        <ol>
          <li>
            Open the <b>Camera</b> app
          </li>
          <li>Tap the up arrow button at the top center of the screen</li>
          <li>
            Tap the TIMER circle button{" "}
            <img
              src="./images/menu/camera-timer-icon.png"
              height="15"
              width="15"
              alt="camera-timer icon"
            />{" "}
            on the bottom
          </li>
          <li>Choose from 3s or 10s</li>
          <li>Tap the shutter circle button</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Background</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>Scroll down and tap Wallpaper</li>
          <li>Tap Lockscreen or Homescreen and set photo</li>
        </ol>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Change Passcode</button>
        }
      >
        <ol>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>Scroll down and tap Face ID & Passcode</li>
          <li>Enter current passcode</li>
          <li>Scroll down and tap CHANGE PASSCODE</li>
          <li>Enter new passcode</li>
        </ol>
      </Collapsible>
      <h1>Android</h1>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Editing</button>}
      >
        <ol>
          <li>
            Open the <b>Photos</b> app
          </li>
          <li>Select the photo you'd like to edit</li>
          <li>Tap the EDIT button in bottom left corner</li>
          <li>
            Swipe through the options on the bottom and use the slider to modify
          </li>
          <li>
            Tap crop to trim the photo down to size by dragging the corner dots
          </li>
        </ol>
        {/* <h3>Camera Settings</h3>
        <h3>Change Lockscreen/Homescreen Background</h3> */}
      </Collapsible>
    </>
  );
}
