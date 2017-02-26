import React from "react"
import { addSymbol, reset } from "./actions"
import Board from "./board"
import { connect } from "react-redux"

function mapStateToProps(store) {
    return {
        board: store.board,
        next: store.next
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
        return (<Board board = {this.props.board}
                 cellClick = {this.props.cellClick}
                />
        )


    }
}