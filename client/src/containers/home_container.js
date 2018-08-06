import React, { Component } from 'react'
import {connect} from 'react-redux'
import { pullBooks } from '../actions/book'
class HomeContainer extends Component {

    state = {

    }

    componentWillMount() {
        this.props.getBooks()
    }


    render(){
        console.log(this.props.books)
        return (
            <div>
                HomeContainer
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
        getBooks: () => {dispatch(pullBooks())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
