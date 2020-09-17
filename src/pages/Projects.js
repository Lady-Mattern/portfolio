import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

// Images
import mustache from '../images/mustache.jpg';
import mozart from '../images/mozart.png';

class Projects extends Component {
    render () {
        return (
            <main className="Projects">
                <h1>Here Are Some of My Favorite Projects</h1>
                <div>
                    {/* Cards commented out need to be finished before revealing */}
                    {/* <ProjectCard 
                        title="REBA of Gem County"
                        image=""
                        site=""
                        languages=""
                        github=""
                    /> */}
                    {/* <ProjectCard 
                        title="Lend A Note"
                        image=""
                        site=""
                        languages="Ruby on Rails, SQL, PostgresQL, Gatsby"
                        github=""
                    /> */}
                    <ProjectCard 
                        title="Paleo Pie"
                        image={mustache}
                        site=""
                        languages="HTML, CSS, JavaScript, React"
                        github=""
                    />
                    <ProjectCard 
                        title="Oxygen"
                        image=""
                        site=""
                        languages="JSX, CSS, React"
                        github=""
                    />
                    <ProjectCard 
                        title="Music With Mozart"
                        image={mozart}
                        site="https://tender-golick-79088e.netlify.app/"
                        languages="HTML, CSS, JavaScript"
                        github="https://github.com/Lady-Mattern/GA_Unit1_Project"
                    />
                </div>
            </main>
        )
    }
}

export default Projects;