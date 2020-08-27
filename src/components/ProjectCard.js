import React, { Component } from 'react';

class ProjectCard extends Component {
    render () {
        const { props } = this.props;
        return (
            <div className="project-card">
                <h3>{props.title}</h3>
                <img src={props.image} alt={props.title} />
                <p>{props.languages}</p>
            </div>
        )
    }
}

export default ProjectCard;