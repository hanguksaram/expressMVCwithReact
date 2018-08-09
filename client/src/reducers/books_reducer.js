const defaultState = []

export default ( state = {}, action) => {
    switch (action.type) {
        

       

        case 'GET_BOOK_W_REVIWER':
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer

            }
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