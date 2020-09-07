import React, { Component } from 'react';

class ProjectCard extends Component {
    render () {
        return (
            <div className="ProjectCard">
                <div className="card-container">
                    <h3>{this.props.title}</h3>
                    <a href={this.props.site}><img src={this.props.image} alt={this.props.title} /></a>
                    <p>{this.props.languages}</p>
                    <a href={this.props.github}>GitHub - {this.props.title}</a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;