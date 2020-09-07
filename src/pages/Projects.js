import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import mustache from '../images/mustache.jpg'

class Projects extends Component {
    render () {
        return (
            <div className="Projects">
                <h1>Here Are Some of My Favorite Projects</h1>
                <div>
                    <ProjectCard 
                        title="REBA of Gem County"
                        image=""
                        site=""
                        languages=""
                        github=""
                    />
                    <ProjectCard 
                        title="Lend A Note"
                        image=""
                        site=""
                        languages="Ruby on Rails, SQL, PostgresQL, Gatsby"
                        github=""
                    />
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
                        image=""
                        site=""
                        languages="HTML, CSS, JavaScript"
                        github=""
                    />
                </div>
            </div>
        )
    }
}

export default Projects;