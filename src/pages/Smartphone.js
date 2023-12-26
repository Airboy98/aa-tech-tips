import Collapsible from "react-collapsible";

export default function Smartphone() {
    return (
        <>
            <h1>Smartphone Troubleshooting</h1>
            <hr></hr>
            <Collapsible trigger=
            {
            <button className="collapsible-trigger">iPhone</button>}
            >
            <h3>Photo Editing</h3>
            <ul>
                <li>Open the <b>Photos</b> app</li>
                <li>Select the photo you'd like to edit</li>
                <li>Tap the EDIT button in top right corner</li>
                <li>Swipe through the setting circles on the bottom and use the slider to modify</li>
                <li>Tap filters at the bottom to select a filter</li>
                <li>Tap crop to trim the photo down to size by dragging the corners</li>
            </ul>

            <h3>Timed Picture Capture</h3>
            <ul>
                <li>Open the <b>Camera</b> app</li>
                <li>Tap the down arrow button at the top of the screen</li>
                <li>Tap the TIMER circle button in the buttons on the bottom</li>
                <li>Choose from 3S or 10S</li>
                <li>Tap the shutter circle button</li>
            </ul>

            <h3>Change Lockscreen/Homescreen Background</h3>
            <ul>
                <li>Open the <b>Settings</b> app</li>
                <li>Scroll down and tap Wallpaper</li>
                <li>Tap Lockscreen or Homescreen and set photo</li>
            </ul>
            </Collapsible>
            <Collapsible trigger=
            {
            <button className="collapsible-trigger">Android</button>}
            >
            <h3>Photo Editing</h3>
            <ul>
                <li>Open the <b>Photos</b> app</li>
                <li>Select the photo you'd like to edit</li>
                <li>Tap the EDIT button in bottom left corner</li>
                <li>Swipe through the options on the bottom and use the slider to modify</li>
                <li>Tap crop to trim the photo down to size by dragging the corner dots</li>
            </ul>
            <h3>Camera Settings</h3>
            <h3>Change Lockscreen/Homescreen Background</h3>
            </Collapsible>
        </>
    )
}