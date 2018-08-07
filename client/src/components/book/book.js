import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBookWithAuthor } from '../../actions/book'

class Book extends Component {

    componentWillMount(){
        console.log(this.props)
        
    }
    renderBook = () => {
       const book = this.props.books.find((book) => {
            return book._id === this.props.match.params.id
            
        })
        
        return <div>{book.name}</div>
    }
    render(){
        return (
            <div>
                {!!this.props.books && this.renderBook()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthor: () => (dispatch(getBookWithAuthor()))
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.book
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)