import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import Nav  from './sideNav/sideNav'

class Header extends Component {
    
    
    state = {
        showNav: false
    }
    
    
    
    render () {
        return (
            <header>
                <div className="open_nav">
                    <FontAwesome name="bars"
                        style={{
                            color: "#fff",
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        />
                </div>
                <Link to ="/" className="logo">
                        The book Shelf 
                </Link>
                <Nav/>
                
            
            </header>

        )
    }
}

export default Header