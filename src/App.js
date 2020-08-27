import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styles from './styles/styles.css';
import ProjectCard from './components/ProjectCard';


function App() {
  return (
    <div className="main-div">
      <Header />
      <div className="welcome">
        <h2>A Reasonably Tame Software Engineer....</h2>
        <p>Welcome to my portfolio! Feel free to have a look AudioBufferSourceNode.</p>
      </div>
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
