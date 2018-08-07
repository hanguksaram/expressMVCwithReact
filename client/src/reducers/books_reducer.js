
const defaultState = []

export default ( state = {}, action) => {
    switch (action.type) {

        case 'BOOK_LIST':
            return {...state, bookList: action.payload}
        default:
            return state
    }
}