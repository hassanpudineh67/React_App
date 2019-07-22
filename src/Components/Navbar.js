import React from 'react';
import './ProPlaceHolder.css';

function Navbar  (props) {
        return (
            <div className="navPro">
                <p className="navp">{props.name}</p>
            </div>
        );
}

export default Navbar;