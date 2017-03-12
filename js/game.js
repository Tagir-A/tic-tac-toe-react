import React from "react"
import { addSymbol, addSymbolAI, reset, chooseMode, timeTravel } from "./actions"
// Components
import Board from "./board"
import Popup from "./popup"
import Info from "./info"
import Menu from "./menu"
import InGameInfo from "./in-game-info"
// end of components
import { connect } from "react-redux"
import { aiMove } from "./logic"

function mapStateToProps(store) {
    return {
        board: store.board,
        next: store.next,
        turn: store.turn,
        winline: store.winline,
        mainMenu: store.mainMenu,
        singlePlayer: store.singlePlayer,
        sideMenu: store.sideMenu,
        playerFirst: store.playerFirst,
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
        },
        aiMove: (board) => {
            dispatch(addSymbolAI(aiMove(board)))
        },
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Game extends React.Component {
    componentDidUpdate() {
        if (this.props.singlePlayer && !this.props.mainMenu && !this.props.sideMenu)
            console.log("so far so good")
            if ( (this.props.playerFirst && this.props.next == "O") || (!this.props.playerFirst && this.props.next == "X")) {
                console.log(this.props)
                console.log("should've moved")
            this.props.aiMove(this.props.board)
        }
        
    }
    render() {
        if (this.props.mainMenu || this.props.sideMenu) {
            let txt = "tic-tac-toe"
            let txtBtn1 = "Single"
            let txtBtn2 = "Multiplayer"
            if (this.props.sideMenu) {
                txt = "First move is always X"
                txtBtn1 = "X"
                txtBtn2 = "O"

            }
            return <div class="layout">
                        <Info
                            text={txt} 
                            onClick={this.props.resetClick}
                        />
                        <Menu
                            txtBtn1={txtBtn1}
                            txtBtn2={txtBtn2}
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