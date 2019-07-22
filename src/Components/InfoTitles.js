import React from 'react';
import './ProPlaceHolder.css';

function InfoTitles  (props) {
    return (
        <div className="InfoTitles">
            <p>{props.name}</p>
        </div>
    );
}

export default InfoTitles;