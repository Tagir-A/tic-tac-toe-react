import React from "react"

export default function InGameInfo (props) {
     return <div class="in-game-info" >
                <p class="info-text" >{props.turns.map((item,i) => {
                    if (i === 0) return null
                    return <a
                                class="turn-click"
                                onClick={props.turnClick}
                                key={i}
                            >{i}</a>
                    })}</p>
                <button 
                    onClick={props.onClick}
                    class="reset-btn"
                >Reset</button>
            </div>
}