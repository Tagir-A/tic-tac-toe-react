import React from "react"
import { addSymbol, reset } from "./actions"
// Components
import Board from "./board"
import Popup from "./popup"
import Info from "./info"
import Menu from "./menu"
// end of components
import { connect } from "react-redux"

function mapStateToProps(store) {
    return {
        board: store.board,
        next: store.next,
        turn: store.turn,
        winline: store.winline,
        mainMenu: store.mainMenu,
        singlePlayer: store.singlePlayer,
        sideMenu: store.sideMenu,
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
        // console.log(this.props)
        if (false) {
            return <div class="layout">
                    <Info
                        text="tic-tac-toe" 
                        onClick={this.props.resetClick}
                    />
                    <Menu />
                </div>
            
        } else {
            return <div class="layout">
                    <Info 
                        onClick={this.props.resetClick}
                    />
                    <Board
                        board={this.props.board}
                        winline={this.props.winline}
                        cellClick={this.props.cellClick}
                    />
                </div>
        }
        /*console.log(this.props)
        if (this.props.turn == 9 && this.props.winline[0] === false) {
            return (
                <Popup onClick={this.props.resetClick} />
            )
        } else
            return (<Board board={this.props.board}
                    winline={this.props.winline}
                cellClick={this.props.cellClick}
                    />
            )*/


    }
}