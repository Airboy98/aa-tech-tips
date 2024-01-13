import Collapsible from "react-collapsible";

export default function Smartphone() {
  return (
    <>
      <h1>Smartphone</h1>
      <hr></hr>
      <Collapsible
        trigger={<button className="collapsible-trigger">iPhone</button>}
      >
        NOTE: The below features are available for the latest iOS and may not be
        available on older versions
        <h3>Photo Editing</h3>
        <ul>
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
        </ul>
        <h3>Shared Photo Album</h3>
        <ul>
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
        </ul>
        <h3>Timed Picture Capture</h3>
        <ul>
          <li>
            Open the <b>Camera</b> app
          </li>
          <li>Tap the up arrow button at the top center of the screen</li>
          <li>Tap the TIMER circle button in the buttons on the bottom</li>
          <li>Choose from 3S or 10S</li>
          <li>Tap the shutter circle button</li>
        </ul>
        <h3>Change Lockscreen/Homescreen Background</h3>
        <ul>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>Scroll down and tap Wallpaper</li>
          <li>Tap Lockscreen or Homescreen and set photo</li>
        </ul>
        <h3>Change Lockscreen Passcode</h3>
        <ul>
          <li>
            Open the <b>Settings</b> app
          </li>
          <li>Scroll down and tap Face ID & Passcode</li>
          <li>Enter current passcode</li>
          <li>Scroll down and tap CHANGE PASSCODE</li>
          <li>Enter new passcode</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Android</button>}
      >
        <h3>Photo Editing</h3>
        <ul>
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
        </ul>
        <h3>Camera Settings</h3>
        <h3>Change Lockscreen/Homescreen Background</h3>
      </Collapsible>
    </>
  );
}
