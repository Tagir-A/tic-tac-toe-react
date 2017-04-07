import React from "react"

export default function Popup(props) {
    return (
        <div  class="popup">
            <button onClick={props.onClick}>Reset</button>
        </div>
    )
}