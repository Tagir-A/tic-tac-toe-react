import React from "react"
import $ from "../css/board.css"

export default function Board(props) {
    return (
        <div class={$.board}>
            {props.board.map((item, i) => {
                let cls;
                if (i === props.winline[0] || i === props.winline[1] || i === props.winline[2]) { cls=$.cell + " " + $.winline}
                else { cls=$.cell}
                if (item == "O") cls+= " " + $.yellow
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