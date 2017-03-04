import React from "react"

export default function Info (props) {
     return <div class="info" >
                <p>{props.text}</p>
                <button onClick={props.onClick}>Reset</button>
            </div>
}