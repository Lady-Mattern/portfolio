import React, { Component } from 'react';

class ProjectCard extends Component {
    render () {
        const { props } = this.props;
        return (
            <div className="ProjectCard">
                <div className="card-container">
                    <h3>{props.title}</h3>
                    <a href={props.site}><img src={props.image} alt={props.title} /></a>
                    <p>{props.languages}</p>
                    <a href={props.github}>GitHub - {props.title}</a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;