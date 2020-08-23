import React, { Component } from 'react';

class Nav extends Component {
    render () {
        return (
            <div className="nav">
                <ul>
                    <li><a href="">Media</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;