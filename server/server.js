import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import BookController  from './controllers/book'
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express()


//MIDDLEWARE//
app.use(bodyParser.json())
app.use(cookieParser())

//INITIALIZE CONTROLLERS//
const bookController =  new BookController()







//REGISTER ROUTES
bookController.registerRoutes(app)







// // POST //

 app.post('/api/book', (req, res) => {
    
    const book = new Book(req.body)
    book.save().
        then((book) => {
            res.status(200).json({
                
            })
        }, (e) => {
            res.status(400).send(e)
        })
})

// // UPDATE //

// app.put('/api/book_update', (req,res) => {

//     Book.findByIdAndUpdate(req.body._id, req.body, {new: true})
//         .then((book) => {
//             res.json(
//                 {
//                     success: true,
//                     book       
//                 })
//         }, (e) => {
//             res.status(400).send(e)
//         })
// })

// // DELETE //

// app.delete()



const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('server running')
})