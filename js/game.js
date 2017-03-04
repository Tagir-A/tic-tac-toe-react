import React from "react"
import { addSymbol, reset, chooseMode, timeTravel } from "./actions"
// Components
import Board from "./board"
import Popup from "./popup"
import Info from "./info"
import Menu from "./menu"
import InGameInfo from "./in-game-info"
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
        turns: store.turns,
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
        },
        buttonClick: (proxy) => {
            const target = proxy.target
            dispatch(chooseMode(target.innerHTML))
        },
        turnClick: (proxy) => {
            const target = proxy.target
            dispatch(timeTravel(target.innerHTML))
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Game extends React.Component {
    render() {
        // console.log(this.props)
        if (this.props.mainMenu || this.props.sideMenu) {
            let txt1 = "Single"
            let txt2 = "Multiplayer"
            if (this.props.sideMenu) {
                txt1 = "X"
                txt2 = "O"
            }
            return <div class="layout">
                        <Info
                            text="tic-tac-toe" 
                            onClick={this.props.resetClick}
                        />
                        <Menu
                            txt1={txt1}
                            txt2={txt2}
                            onClick={this.props.buttonClick}
                        />
                    </div>
        } else {
            return <div class="layout">
                    <InGameInfo 
                        turns={this.props.turns}
                        turnClick={this.props.turnClick}
                        onClick={this.props.resetClick}
                    />
                    <Board
                        board={this.props.board}
                        winline={this.props.winline}
                        cellClick={this.props.cellClick}
                    />
                </div>
        }
    }
}