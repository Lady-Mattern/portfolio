import React from 'react';

// Static components
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

// Full page styles
import '../../styles/reset.css';
import styles from './Layout.module.css';

export default (props) => (
    <div className={styles.container}>
        <Nav />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
);