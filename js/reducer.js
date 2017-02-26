// import { reset, addSymbol } from "./actions"
import { chkWin, chkWinline } from "./logic"

const initState = {
    board: Array(9).fill(null),
    next: "X",
    winner: false,
    winline: null,
    turn: 0,
}

export default function gameReducer(state = initState, action) {
    switch (action.type) {
        case "RESET":
            return initState
        case "ADD_SYMBOL":
            let newState = Object.assign({}, state, {board: state.board.slice()})
            if (newState.board[action.index]) {
                return state
            }
            newState.board[action.index] = state.next
            newState.next = state.next == "X" ? "O" : "X"
            newState.turn++
            const winner = chkWin(newState.board)
            if (winner) {
                newState.winner = true
                newState.winline = chkWinline(newState.board)
            }
            return newState

        default:
            return state
    }
    return state
}

