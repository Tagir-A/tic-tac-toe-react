import React from "react"

export default function InGameInfo (props) {
     return <div class="info" >
                <p class="info-text" >{"test"}</p>
                <button 
                    onClick={props.onClick}
                    class="reset-btn"
                >Reset</button>
            </div>
}