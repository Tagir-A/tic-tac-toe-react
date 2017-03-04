import React from "react"

export default function Info (props) {
     return <div class="info" >
                <p class="info-text" >{props.text.toUpperCase()}</p>
                <button 
                    onClick={props.onClick}
                    class="reset-btn"
                >Reset</button>
            </div>
}