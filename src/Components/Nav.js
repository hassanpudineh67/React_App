import React from 'react';
import '../css/ProPlaceHolder.css';
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <div className="inputWithIcon">
                <i className="fa fa-search fa-fw" aria-hidden="true"></i>
                <input type="text" name="" placeholder="جستجوی کاربر تصادفی"></input>
            </div>
            <div className="mainmenu">
                <ul className="nav-links">

                        <li className="homePage">
                            <Link to='/homePage'>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="aboutLink">
                            <Link to='/about'>
                                درباره
                            </Link>
                        </li>

                        <li className="shopLink">
                            <Link to='/shop'>
                            راه های ارتباطی
                            </Link>
                        </li>
                        <li className="offersLink">
                            <Link to='/offers'>
                            کاربران برتر
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;