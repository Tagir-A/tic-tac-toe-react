import React from "react"
import { addSymbol, reset } from "./actions"
import Board from "./board"
import Popup from "./popup"
import { connect } from "react-redux"

function mapStateToProps(store) {
    return {
        board: store.board,
        next: store.next,
        turn: store.turn,
        winline: store.winline,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        cellClick: (proxy) => {
            const target = proxy.target
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
        console.log(this.props)
        if (this.props.turn == 9) {
            return (
                <Popup onClick={this.props.resetClick} />
            )
        } else
            return (<Board board={this.props.board}
                    winline={this.props.winline}
                cellClick={this.props.cellClick}
                    />
            )


    }
}