import React from 'react';

const Image = (props) => (
    <div className="image">
        <img src={props.src} alt={props.alt} />
    </div>
);

export default Image;