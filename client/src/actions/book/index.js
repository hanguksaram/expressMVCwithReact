import axios from 'axios'
const booksRoute = {
    getBook: '/api/book',
    getBooks: '/api/books',
    postBook: '/api/book',
    deleteBook: '/api/book',
    updateBook:'/api/book',
    getBooksByOwner: '/api/book/:ownerId'
}

const getBookWithAuthor = (id) => {
    
    const author = axios.get('/api/users/' + id)
        .then(response => response.data)
    
    return {
        type: 'BOOK_AUTHOR',
        payload: author
    }
}

const getBooks = (skip, limit, list) => {
    
    const books = axios.get(`${booksRoute.getBooks}?skip=${skip}&limit=${limit}&order=asc`)
        .then(response => {
            
            if (list)
            
            {   console.log("kek")
                return [...list, ...response.data]
            }
            console.log("cheburek")
            return response.data
            })
    
    return {
        type: 'BOOK_LIST',
        payload: books
    }
}


const getBookList = (books) => {
    return {
        type: 'BOOK_LIST',
        payload: books
    }
}


const pullDefaultBooks = () => {
return function(dispatch) {
   return  axios.get(booksRoute.getBooks).then((response) => {
        dispatch(getBookList(response.data))
   }, (e) => console.log(e))

}
}

const pullBooks = (skip, limit) => {
   
    return function(dispatch){
    axios.get(`${booksRoute.getBooks}?skip=${skip}&limit=${limit}&order=asc`).then((response) => {
        dispatch(getBookList(response.data))
    }, (e) => console.log(e))
}
}
  

export { pullBooks, pullDefaultBooks , getBookList, getBooks, getBookWithAuthor}