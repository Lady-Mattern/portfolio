import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Contact from './pages/Contact';
import styles from './styles/styles.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <div className="welcome">
          <h2>A Reasonably Tame Software Engineer....</h2>
          <p>Welcome to my portfolio! Feel free to have a look around.</p>
        </div>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
