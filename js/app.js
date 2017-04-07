import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import gameReducer from "./reducer"
import Game from "./game"

let store = createStore(gameReducer)
const app = document.getElementById("app")

ReactDOM.render(<Provider store={store}>
                    <Game />
                </Provider>, app)