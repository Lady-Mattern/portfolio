import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Constant Components
import Header from './components/Header';
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
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/media">
                <Media />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
