import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <p>
            Copyright &copy; Leah Mattern All Rights Reserved
            {' '}{new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;