import React from 'react';
import '../css/ProPlaceHolder.css';

function InfoTitles  (props) {
    return (
        <div className="InfoTitle">
            <p>{props.name}</p>
        </div>
    );
}

export default InfoTitles;