import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Constant Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Contact from './pages/Contact';

import styles from './styles/styles.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/media">
                <Media />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
