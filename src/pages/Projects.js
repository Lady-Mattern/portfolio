import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

class Projects extends Component {
    render () {
        return (
            <div>
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
                        languages=""
                        github=""
                    />
                    <ProjectCard 
                        title="Paleo Pie"
                        image=""
                        site=""
                        languages=""
                        github=""
                    />
                    <ProjectCard 
                        title="Oxygen"
                        image=""
                        site=""
                        languages=""
                        github=""
                    />
                    <ProjectCard 
                        title="Music With Mozart"
                        image=""
                        site=""
                        languages=""
                        github=""
                    />
                </div>
            </div>
        )
    }
}

export default Projects;