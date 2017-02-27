import React from "react"

export default function Board(props) {
    return (
        <div class="board">
            {props.board.map((item, i) => {
                let cls;
                if (i === props.winline[0] || i === props.winline[1] || i === props.winline[2]) { cls="cell winline"}
                else { cls="cell"}
                return <button
                    id={i}
                    key={i}
                    class={cls}
                    onClick={props.cellClick}
                >{item}</button>
            })}
        </div>
    )
}