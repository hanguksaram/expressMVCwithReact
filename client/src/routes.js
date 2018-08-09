import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Layout from './hoc/layout'
import Book from './components/book/book'
import Login from './containers/Admin/login'
import Auth from './hoc/auth'
import User from './components/Admin/'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)}/>
                <Route path="/book/:id" exact component={Auth(Book)}/>
                <Route path="/user" exact component={Auth(User, true)}/>
                <Route path="/login" exact component={Auth(Login, false)}/>
            </Switch>
        </Layout>
        
    )
}
export default Routes