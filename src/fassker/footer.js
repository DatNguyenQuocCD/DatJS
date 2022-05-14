import React from "react";
function Footer() {
    return (
        <footer>
            <div className="footer-top container">
                <div>
                    <h1>IN.EX</h1>
                    <ul className="f-t">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h1>EXPERIENCE</h1>
                    <ul className="f-t">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping &amp; Returns</a></li>
                        <li><a href="#">Store Policy </a></li>
                        <li><a href="#">Payment Methods</a></li>
                    </ul>
                </div>
                <div>
                    <h1>FOLLOW US</h1>
                    <ul className="f-t">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Pinterest</a></li>
                    </ul>
                </div>
                <div>
                    <h1>JOIN OUR NEWSLETTER</h1>
                    <br />
                    <form>
                        <input type="text" placeholder="Enter your email here*" />
                    </form>
                    <br />
                    <button>Subscribe Now</button>
                </div>
            </div>
            <div className="footer-bottom container">
                <a href="#">© 2022 by PNV. Proudly created with Nguyen Quoc Dat</a>
            </div>
        </footer>
    )
}
export default Footer;