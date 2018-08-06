import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    
    const navs = [
        {
            name: 'Home',
            to: '/',
            auth: false
        },
        {
            name: 'Log In',
            to: '/',
            auth: false
        },
        {
            name: 'Home',
            to: '/',
            auth: false
        },
        {
            name: 'Home',
            to: '/',
            auth: false
        },
        {
            name: 'Home',
            to: '/',
            auth: false
        },]

    const renderNav = () => {
        return navs.filter((element) => {
            return element.auth === !!props.isAuth}
            ).map((el, index) => {
                return (<li key={index}><Link to={el.to}>{el.name}</Link></li>)
            })
    }
    
    return (<nav>
        <ul>
            {renderNav()}
        </ul>
    </nav>
    )
}


export default Nav