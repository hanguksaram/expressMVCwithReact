import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'

class Login extends Component {


    state = {
        email: '',
        password: '',
        error: '',
        success: false
    }
    submitForm = (event) => {
        event.preventDefault()
        this.props.logIn(this.state)
    }
    handleInputEmail = (event) => {
        this.setState({email: event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.user.login.isAuth)
            this.props.history.push('/user')
    }

    render() {
        
        return (
            <div className="rl_container">
                <form noValidate onSubmit={this.submitForm}>
                    <h2>Log In Here</h2>

                    <div className="form_element">
                        <input type="email" placeholder="enter your email" 
                        value={this.state.email}
                        onChange={this.handleInputEmail}/>
                    </div>
                    <div className="form_element">
                        <input type="password" placeholder="enter your password"
                        value={this.state.password}
                        onChange={this.handleInputPassword} />
                    </div>
                    <button type="submit">Log In</button>
                    {!!this.props.user.login && <div>{this.props.user.login.error}</div>}
                </form>
            </div>
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
        logIn: (user) => {dispatch(loginUser(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)