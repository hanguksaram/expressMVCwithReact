export default (state = {}, action) => {
    switch(action.type){
        
        case 'USER_AUTH':
            return {
                ...state, login: action.payload
            }
        case 'USER_LOGIN':
            return {...state, login: action.payload}
        default: 
            return state
    }
}