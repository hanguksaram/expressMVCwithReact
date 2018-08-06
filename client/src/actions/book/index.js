import axios from 'axios'
const booksRoute = {
    getBook: '/api/book',
    getBooks: '/api/books',
    postBook: '/api/book',
    deleteBook: '/api/book',
    updateBook:'/api/book',
    getBooksByOwner: '/api/book/:ownerId'
}



const pullBooks = () => {
    let books 
    
    axios.get(booksRoute.getBooks).then((response) => {
        books = response.data
    }, (e) => console.log(e))

    return  {
        type: 'BOOK_LIST',
        payload: books
    }
}

export { pullBooks }