import React from "react"

export default function Menu (props) {
    return <div class="menu" >
            <button class="big-btn" onClick={props.onClick} >{props.txtBtn1}</button>
            <button class="big-btn" onClick={props.onClick} >{props.txtBtn2}</button>
    </div>
}