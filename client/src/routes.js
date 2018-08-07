import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Layout from './hoc/layout'
import Book from './components/book/book'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/book/:id" exact component={Book}/>
            </Switch>
        </Layout>
        
    )
}
export default Routes