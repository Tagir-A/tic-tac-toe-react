import React from "react"

export default function InGameInfo (props) {
    if (props.turns.length % 2) {
        return <div class="in-game-info" >
                    <p class="info-text" >Turn:{props.turns.map((item,i) => {
                        if (i === 0) return null
                        return <a
                                    class="turn-click"
                                    onClick={props.turnClick}
                                    key={i}
                                >{i}</a>
                        })}</p>
                    <div class="game-helper">
                        <p class="nextR">X</p>
                        <button 
                            onClick={props.onClick}
                            class="reset-btn"
                        >Reset</button>
                        <p class="nexter">O</p>
                    </div>
                </div>
    } else {
        return <div class="in-game-info" >
                    <p class="info-text" >Turn:{props.turns.map((item,i) => {
                        if (i === 0) return null
                        return <a
                                    class="turn-click"
                                    onClick={props.turnClick}
                                    key={i}
                                >{i}</a>
                        })}</p>
                    <div class="game-helper">
                        <p class="nexter">X</p>
                        <button 
                            onClick={props.onClick}
                            class="reset-btn"
                        >Reset</button>
                        <p class="nextR">O</p>
                    </div>
                </div>
    }
}