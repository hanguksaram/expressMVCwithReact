import React, { Component } from 'react';
import { connect } from 'react-redux'
import { auth } from '../actions/user'

export default (ComposedClass, reload) => {
    class AuthenticationCheck extends Component {


        state = {
            loading: true
        }

        componentWillMount(){
            this.props.checkUserAuth()
        }
        componentWillReceiveProps(nextProps) {
            this.setState({loading:false})
            
            if (!nextProps.user.login.isAuth) {
                if(reload){this.props.history.push('/login')}
                
            } else {

                if (!reload){
                this.props.history.push('/user')
                }
            }
        }

        render(){
            
            if (this.state.loading){
                return <div className="loader">Loading...</div>            
            }
            return (
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }


    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            checkUserAuth : () => {dispatch(auth())}
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)
}