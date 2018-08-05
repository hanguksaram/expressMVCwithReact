import mongoose from 'mongoose'
import config from '../config/config'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/booksShelf', {useNewUrlParser: true})

export { mongoose }