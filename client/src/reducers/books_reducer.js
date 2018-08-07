
const defaultState = []

export default ( state = defaultState, action) => {
    switch (action.type) {

        case 'BOOK_LIST':
            return [...state, ...action.payload]
        default:
            return state
    }
}