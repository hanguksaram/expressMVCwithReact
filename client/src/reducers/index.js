import { combineReducers } from 'redux'
import user from './user_reducer'
import book from './books_reducer'

const rootReducer = combineReducers({
    book,
    user
})

export default rootReducer