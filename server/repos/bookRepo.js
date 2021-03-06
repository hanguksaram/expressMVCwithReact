const { Book } = require('../models/book')




export default class BookRepo {

    getBooks(skip ,limit, order){
        return Book.find().skip(skip).sort({_id: order}).limit(limit).exec()
    }
    getBook(id){
        return Book.findById(id)
    }
    getBooksByOwnerId(ownerId) {
        return Book.find({ownerId})
    }
    addBook(bookDto){
        const book = new Book(bookDto)
        return book.save()
    }
    changeBook(bookDto) {
         return Book.findByIdAndUpdate(bookDto._id, bookDto, {new: true})
    }
    deleteBook(id) {
        return Book.findByIdAndRemove(id)
            
    }

}