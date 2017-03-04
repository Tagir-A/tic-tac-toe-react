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
export const reset = {
    type: "RESET",
}