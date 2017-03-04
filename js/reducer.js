import { reset, addSymbol } from "./actions"
import { chkWinLine } from "./logic"

const initState = {
    board: Array(9).fill(null),
    next: "X",
    winline: [false,false,false],
    turn: 0,
    mainMenu: true,
    singlePlayer: false, // true = single, false = multi
    sideMenu: false, // menu to choose side
    playerFirst: true, // AI or Player goes first in single
}

export default function gameReducer(state = initState, action) {
    let newState
    switch (action.type) {
        case "RESET":
            return initState
        case "ADD_SYMBOL":
            //newState = Object.assign({}, state, {board: state.board.slice()})
            newState = JSON.parse(JSON.stringify(state)) // deep object clone
            if (newState.board[action.index] || newState.winline[0] !== false) {
                return state
            }
            newState.board[action.index] = state.next
            newState.next = state.next == "X" ? "O" : "X"
            newState.turn++
            if (newState.turn > 4) {
                newState.winline = chkWinLine(newState.board)
            }
            return newState
        case "CHOOSE_MODE":
            newState = JSON.parse(JSON.stringify(state))
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
        default:
            return state
    }
    return state
}

