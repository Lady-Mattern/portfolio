import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <h1>Leah Mattern</h1>
                <Nav />
            </div>
        );
    }
}

export default Header;