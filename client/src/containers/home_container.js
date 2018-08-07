import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
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
        
        
        return this.props.books.bookList.map((book,i) => {
                return (
                    <Link key={i} to={'/book/'+ book._id}>
                    <div key= {i}>
                        {book.name}
                     </div>
                     </Link>
                )
            })
        }
    getMoreBooks = () => {
        this.props.getTestBooks(this.state.skip, this.state.limit, this.props.books.bookList)
        console.log(this.props.books.bookList, "fromHome")
        this.setState({skip: this.state.skip + this.state.limit})
    }
    
    render () {
        console.dir(this.props.books)
        return (
            <div>
                wtf
             {!!this.props.books.bookList && this.renderBooks()}  
           
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
        getTestBooks: (skip, limit, add) => {dispatch(getBooks(skip, limit, add))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
