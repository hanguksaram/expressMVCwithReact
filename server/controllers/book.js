import BookRepo from '../repos/bookRepo'
import { booksRoute } from '../routes/routes'
const {getBooksByOwner ,getBook ,getBooks, postBook, deleteBook, updateBook } = booksRoute


export default class BookController {
    
    constructor(){
        
        this._bookRepo = new BookRepo()
    }
    //ROUTES//
    registerRoutes(app){
        app.get(getBook, this.getBook.bind(this))
        app.get(getBooks, this.getAllBooks.bind(this))
        app.post(postBook, this.postBook.bind(this))
        app.delete(deleteBook, this.deleteBook.bind(this))
        app.put(updateBook, this.updateBook.bind(this))
        // app.get(getBooksByOwner, this.getOwnerBooks.bind(this))
    }


    
    
    //HANDLERS//
    getBook(req, res) {
        
        const id = req.params.id
        this._bookRepo.getBook(id)
            .then((book) => {
                if (!book)
                    return res.sendStatus(404)
                res.json(book)
            }, (e) => {
                res.status(400).send(e)
            })
    }

    getAllBooks (req, res) {
        // localhost:3001/api/books?skip=3&limit=2&order=asc
        const skip = parseInt(req.query.skip)
        const limit = parseInt(req.query.limit)
        const order = req.query.order
        this._bookRepo.getBooks(skip, limit, order)
            .then((books) => {
                res.json(books)
            }, (e) => {
                res.status(400).send(e)
        })
    }
    postBook (req, res) {
         
        this._bookRepo.addBook(req.body)
            .then((book) => {
                res.json(
                    {
                        post: true,
                        bookId: book._id
                    })
            }, (e) => {
                res.status(400).send(e)
            })
    }
    deleteBook(req, res){
        
        const id = req.query.id
        this._bookRepo.deleteBook(id)
            .then((data) => {
                res.json(true)
            },
        (e) => res.status(400).send(e))
    }
    updateBook(req, res){
        this._bookRepo.changeBook(req.body)
            .then((book) => {
                res.json(book)
            }, (e) => {
                res.status(400).send(e)
            })

    }
    getOwnerBooks(req, res) {
        
        const ownerId = req.params.ownerId
        this._bookRepo.getBooksByOwnerId(ownerId)
            .then((books) => {
                if(!books)
                    return res.sendStatus(404)
                res.json(books)
            }, (e) => json.status(400).send(e))
    }


}

