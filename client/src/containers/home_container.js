import React, { Component } from 'react'
import {connect} from 'react-redux'
import { pullBooks, pullDefaultBooks, getBooks} from '../actions/book'
class HomeContainer extends Component {

    state = {
        limit: 1,
        skip: 0
    }

    componentWillMount() {
        this.props.getTestBooks(0, 1)
        
        this.setState({skip: this.state.skip + this.state.limit})
    }

    renderBooks = () => {
        const books = []
        for (const key in this.props.books) {
            books.push(this.props.books[key])
        }
        console.dir(books)
        return books.map((book,i) => {
                return (
                    <div key= {i}>
                        {book.review}
                     </div>
                )
            })
        }
    getMoreBooks = () => {
        this.props.getTestBooks(this.state.skip, this.state.limit)
        this.setState({skip: this.state.skip + this.state.limit})
    }
    
    render () {
        console.dir(this.props.books)
        return (
            <div>
                wtf
                {!!this.props.books && this.renderBooks()} 
           
            <button onClick={this.getMoreBooks}>gerMoreBooks</button>
            </div>


        )
    }

}

const mapStateToProps = (state) => {
    return {
        books: state.book
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        getBookss: (skip, limit) => {dispatch(pullBooks(skip, limit))},
        getDefaultBooks: () => {dispatch(pullDefaultBooks())},
        getTestBooks: (skip, limit) => {dispatch(getBooks(skip, limit))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
