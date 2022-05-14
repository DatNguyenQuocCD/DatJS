import React from "react";
import logo from './../asset/img/LogoFassker.png';
function Header() {
    return (
        <header>
            <div className="header-top">
                <nav className="sticky">
                    <div id="logo">
                        <a href="#"><img className="logo" src={logo} alt="Logo" /></a>
                        <h1>IN.EX</h1>
                    </div>
                    <ul className="main_nav">
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">SHOP</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">MEMBERS</a>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li>
                            <a href="#">GALLERY</a>
                        </li>
                        <li>
                            <a href="#">CONTACTS</a>
                        </li>
                    </ul>
                    <div id="right">
                        <div className="login text-center">
                            <i className="fa-solid fa-user"></i>
                            <p>Login</p>
                        </div>
                        <div className="cartping text-center">
                            <i className="fa-brands fa-opencart"> 0</i>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;