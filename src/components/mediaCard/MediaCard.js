import React from 'react';

const MediaCard = (props) => (
    <div className="MediaCard">
        <h3>{props.title}</h3>
        <p>{props.subTitle}</p>
        <a href={props.site}><img className="media-image" src={this.props.image} alt={this.props.title} /></a>
        <p>{props.description}</p>
    </div>
);

export default MediaCard;