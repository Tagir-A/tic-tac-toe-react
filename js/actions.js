export function addSymbol (index) {
    return {
        type: "ADD_SYMBOL",
        index: index,
    }
}
export function chooseMode (index) {
    return {
        type: "CHOOSE_MODE",
        index: index,
    }
}
export const reset = {
    type: "RESET",
}