import React from "react"

export default function Board(props) {
    return (
        <div class="board">
            {props.board.map((item, i) => {
                return <button
                    id={i}
                    key={i}
                    class="cell"
                    onClick={props.cellClick}
                >{item}</button>
            })}
        </div>
    )
}