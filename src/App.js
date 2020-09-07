import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Media from './pages/Media';
import styles from './styles/styles.css';

class App extends Component {
  render () {
    return (
      <div className="main-div">
        <Header />
        <div className="welcome">
          <h2>A Reasonably Tame Software Engineer....</h2>
          <p>Welcome to my portfolio! Feel free to have a look around.</p>
        </div>
        <Projects />
        <Media />
        <Footer />
      </div>
    );
  }
}

export default App;
