import './homepage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react';

import { Divider, Modal } from 'antd';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';
import InstagramFeed from 'react-ig-feed';
import Slider from "react-slick";

import { Controller, useForm } from 'react-hook-form';

import { Input, Drawer, Spin } from 'antd';

import _1 from '../../assets/images/homepage/_1.jpg';

import HeroVideo from '../../assets/videos/hero.mp4';

import testimonial from '../../assets/images/content/testimonial.webp';

const Homepage = () => {
    return (
        <div>
            <Nav />
            <div className="cover-me">
                <h3>Building App. Please wait...</h3>
                <Spin />
            </div>
            <div className="testimonials mt_5">
                <div className="grid_2">
                    <div className="grid_text_div">
                        <div className="grid_text_cover">
                            <h5>LOVED BY PEOPLE LIKE YOU</h5>
                            <h4>I'm really big on making the best use of my space, and this table is the perfect fit for me.</h4>
                            <p>Dr Joy Aifou, Satisfied Customer</p>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial_image_div">
                            {/* <img src={testimonial} */}
                            <img src={testimonial}
                                style={{ width: 'auto', height: 'auto' }}
                                alt="testimonial" className="testimonial_image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;