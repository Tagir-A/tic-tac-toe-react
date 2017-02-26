import React from "react"
import { addSymbol, reset } from "./actions"
import Board from "./board"
import Popup from "./popup"
import { connect } from "react-redux"

function mapStateToProps(store) {
    console.log(store)
    return {
        board: store.board,
        next: store.next,
        turn: store.turn,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        cellClick: (proxy) => {
            const target = proxy.target
            console.log(target)
            dispatch(addSymbol(target.id))
        },
        resetClick: () => {
            dispatch(reset)
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Game extends React.Component {
    render() {
        if (this.props.turn == 9) {
            return (
                <Popup onClick = {this.props.resetClick}/>
            )
        } else 
        return (<Board board = {this.props.board}
                 cellClick = {this.props.cellClick}
                />
        )


    }
}