
const defaultState = []

export default ( state = {}, action) => {
    switch (action.type) {

        case 'REMOVE_SELECTED_BOOK':
            return {
                ...state, selectedBook: null
            }
        case 'SELECT_BOOK': 
            return {
                ...state, selectedBook: action.payload
            }
        case 'BOOK_LIST':
            return {...state, bookList: action.payload}
        default:
            return state
    }
}