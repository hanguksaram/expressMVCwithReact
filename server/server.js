import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import BookController  from './controllers/book'
import UserController from './controllers/user'
// import cors from 'cors'
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express()

// app.use(cors())
//MIDDLEWARE//
app.use(bodyParser.json())
app.use(cookieParser())

//INITIALIZE CONTROLLERS//
const bookController =  new BookController()
const userController = new UserController()






//REGISTER ROUTES
bookController.registerRoutes(app)
userController.registerRoutes(app)






// // POST //



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