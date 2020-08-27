import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

class Projects extends Component {
    render () {
        return (
            <div>
                <h1>Here Are Some of My Favorite Projects</h1>
                <div>
                    <ProjectCard />
                </div>
            </div>
        )
    }
}

export default Projects;