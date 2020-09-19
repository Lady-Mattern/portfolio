import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <nav className="Nav">
                <div className="nav-wrapper">
                    <NavLink exact activeClassName="active-link-home" to="/">
                        <h1 className="brand-logo">Leah Mattern</h1>
                    </NavLink>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <NavLink exact activeClassName="active-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active-link" to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active-link" to="/media">
                                Media
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;