import React, { Component } from 'react';

class MediaCard extends Component {
    render () {
        return (
            <div className="MediaCard">
                <h3>{this.props.title}</h3>
                <p>{this.props.subTitle}</p>
                <a href={this.props.site}><img src={this.props.image} alt={this.props.title} /></a>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default MediaCard;