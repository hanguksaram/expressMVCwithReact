const booksRoute = {
    getBook: '/api/books/:id',
    getBooks: '/api/books',
    postBook: '/api/book',
    deleteBook: '/api/book',
    updateBook:'/api/book',
    getBooksByOwner: '/api/books/'
}

const usersRoute = {
    login: '/api/user/login',
    logout: '/api/user/logout',
    getUsers: '/api/users', 
    postUser: '/api/user', 
    deleteUser: '/api/user', 
    updateUser: '/api/user',
    isAuth: '/api/user/auth'
}

export {booksRoute, usersRoute}