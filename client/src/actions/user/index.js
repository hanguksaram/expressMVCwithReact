import axios from 'axios'
export const loginUser = ({email, password}) => {
    
    const request = axios.post('/api/user/login', {email, password})
        .then(response => response.data).catch(e => errorHandler(e))
    
    return {
        type:'USER_LOGIN',
        payload: request
    }
}
export const auth = () => {
    const request = axios.get('/api/user/auth')
        .then(response => response.data)
        .catch(e => errorHandler(e))
        
        return {
        type: 'USER_AUTH',
        payload: request
    }
}
const errorHandler = e => 
{
    return {
        isAuth: false,
        error :e.response.data}
}
