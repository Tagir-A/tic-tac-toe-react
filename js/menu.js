import React from "react"

export default function Menu (props) {
    return <div class="menu" >
            <button class="big-btn">{props.txt1}</button>
            <button class="big-btn">{props.txt2}</button>
    </div>
}