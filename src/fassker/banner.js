import React from "react";
import bannerTop from './../asset/img/header-middle.png';
import bannerMiddle from './../asset/img/header-bottom.png';
import bannerBottom from './../asset/img//bottom.png';
function Banner() {
    return (
        <section className="banner">
            <div className="banner-top">
                <img src={bannerTop} alt="photo" />
            </div>
            <div className="banner-middle">
                <img width="100%" src={bannerMiddle} alt="photo" />
            </div>
            <div className="banner-bottom">
                <img src={bannerBottom} alt="photo" />
            </div>
        </section>
    )
}

export default Banner;