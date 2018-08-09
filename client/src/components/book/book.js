import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBookWithAuthor } from '../../actions/book'

class Book extends Component {

    componentWillMount(){
        console.log(this.props)


        this.props.getAuthor(this.props.match.params.id)
    }
  
        
     
    
    render(){
       
        return (
            <div>
                kek
                 {!!this.props.books.book && <div>{this.props.books.book.name}</div> } 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthor: (bookId) => (dispatch(getBookWithAuthor(bookId)))
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.book
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)