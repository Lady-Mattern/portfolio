import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <nav className="Nav">
                <NavLink exact activeClassName="active-link-home" to="/">
                    <h1>Leah Mattern</h1>
                </NavLink>
                <NavLink exact activeClassName="active-link" to="/projects">
                    Projects
                </NavLink>
                <NavLink exact activeClassName="active-link" to="/media">
                    Media
                </NavLink>
                <NavLink exact activeClassName="active-link" to="/contact">
                    Contact
                </NavLink>
            </nav>
        );
    }
}

export default Nav;