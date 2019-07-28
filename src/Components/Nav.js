import React from 'react';
import './ProPlaceHolder.css';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle={
                }
    const navStyle1={
        // paddingLeft:"10px"
    }
    const navStyle2={
        // paddingLeft:"10px"
    }
    const navStyle3={
        // paddingLeft:"10px"
    }


    return(
        <nav>
            <div className="inputWithIcon">
                <i className="fa fa-search fa-fw" aria-hidden="true"></i>
                <input type="text" name="" placeholder="جستجوی کاربر تصادفی"></input>
            </div>
            <div className="mainmenu">
                <ul className="nav-links">

                        <li className="homePage">
                            <Link style={navStyle3} to='/homePage'>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="aboutLink">
                            <Link style={navStyle} to='/about'>
                                درباره
                            </Link>
                        </li>

                        <li className="shopLink">
                            <Link style={navStyle1} to='/shop'>
                            راه های ارتباطی
                            </Link>
                        </li>
                        <li className="offersLink">
                            <Link style={navStyle2} to='/offers'>
                            کاربران برتر
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;