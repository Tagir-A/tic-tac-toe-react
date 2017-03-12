import { reset, addSymbol } from "./actions"
import { chkWinLine } from "./logic"

const initState = {
    board: Array(9).fill(null),
    next: "X",
    winline: Array(3).fill(false),
    turn: 0,
    mainMenu: true,
    singlePlayer: false, // true = single, false = multi
    sideMenu: false, // menu to choose side
    playerFirst: true, // AI or Player goes first in single
    turns: Array(1).fill(null)
}
function calculateMove (newState, action, state) {
            newState.board[action.index] = state.next
            newState.next = state.next == "X" ? "O" : "X"
            newState.turn++
            if (newState.turn > 4) {
                newState.winline = chkWinLine(newState.board)
            }
            newState.turns.push(newState)
            return newState
}
export default function gameReducer(state = initState, action) {
    let newState
    switch (action.type) {
        case "RESET":
            return initState
        case "ADD_SYMBOL":
            //object clone with deep array cloning
            newState = Object.assign({}, state, {board: state.board.slice(),
                                                winline: state.winline.slice(),
                                                turns: state.turns.slice(),
                                                }) 
            //check for empty cell
            if (newState.board[action.index] || newState.winline[0] !== false
            || (newState.singlePlayer && ( (newState.playerFirst && newState.next == "O") || (!newState.playerFirst && newState.next == "X") ))) {
                return state
            }
            // newState.board[action.index] = state.next
            // newState.next = state.next == "X" ? "O" : "X"
            // newState.turn++
            // if (newState.turn > 4) {
            //     newState.winline = chkWinLine(newState.board)
            // }
            // newState.turns.push(newState)
            return calculateMove(newState, action, state)
        case "ADD_SYMBOL_AI":
            newState = Object.assign({}, state, {board: state.board.slice(),
                                                winline: state.winline.slice(),
                                                turns: state.turns.slice(),
                                            })
           if (newState.board[action.index] || newState.winline[0] !== false) return state
           return calculateMove(newState, action, state)
        case "CHOOSE_MODE":
            newState = Object.assign({}, state, {board: state.board.slice(),
                                                winline: state.winline.slice(),
                                                turns: state.turns.slice(),
                                                })
            newState.mainMenu = false
            switch (action.value) {
                case "Single":
                    newState.singlePlayer = true
                    newState.sideMenu = true
                    return newState
                case "Multiplayer":
                    newState.singlePlayer = false
                    return newState
                case "X":
                    newState.playerFirst = true //unnecessary, but for the sake of consistency
                    newState.sideMenu = false
                    return newState
                case "O":
                    newState.playerFirst = false
                    newState.sideMenu = false
                    return newState
                default:
                    return state
            }
            return newState
        case "TIME_TRAVEL":
            return state.turns[action.index]
        default:
            return state
    }
    return state
}

