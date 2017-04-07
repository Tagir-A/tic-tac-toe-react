export function addSymbol (index) {
    return {
        type: "ADD_SYMBOL",
        index: index,
    }
}
export function chooseMode (value) {
    return {
        type: "CHOOSE_MODE",
        value: value,
    }
}
export function timeTravel (index) {
    return {
        type: "TIME_TRAVEL",
        index: index,
    }
}
export function addSymbolAI (index) {
    return {
        type: "ADD_SYMBOL_AI",
        index: index,
    }
}
export const reset = {
    type: "RESET",
}