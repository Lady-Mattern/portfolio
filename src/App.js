import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
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
    </div>
  );
}

export default App;