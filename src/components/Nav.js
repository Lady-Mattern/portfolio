import React, { useState, Component } from 'react';
import { NavLink } from 'react-router-dom';

// Page Components
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Media from '../pages/Media';
import Contact from '../pages/Contact';

class Nav extends Component {
    render () {
        return (
            <nav className="Nav">
                <NavLink className="Nav-item">
                    <Home />
                </NavLink>
                <NavLink className="Nav-item">
                    <Projects />
                </NavLink>
                <NavLink className="Nav-item">
                    <Media />
                </NavLink>
                <NavLink className="Nav-item">
                    <Contact />
                </NavLink>
            </nav>
        );
    }
}

export default Nav;