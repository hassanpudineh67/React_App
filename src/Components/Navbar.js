import React, {Component} from 'react';
import '../css/ProPlaceHolder.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navPro">
                <p className="nav">{this.props.name}</p>
            </div>
        );
    }
}

export default Navbar;