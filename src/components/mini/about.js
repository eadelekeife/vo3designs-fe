import './style.css';

import React from 'react';
import InstagramFeed from 'react-ig-feed';

import { Divider } from 'antd';
import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import Story from '../../assets/images/content/story.jpg';
import Paystack from '../../assets/images/clients/paystack.png';
import Providus from '../../assets/images/clients/providus.svg';
import Landmark from '../../assets/images/clients/lmb.png';
import Leadway from '../../assets/images/clients/leadway.png';
import Swiss from '../../assets/images/clients/swiss.png';

const About = () => {
    let token = "IGQVJWbFFlVkZARMUxQc1BqZAWxoeVQwM0M2NEhKQmtmOHZADaDZA2OTRJM2JHZAmg2SVhrNUgyQ3VaOVBCZA1ByRG1kc0VIYVd1djFRLXNfTWNaeWFoeTVxUUZAJRmsyTXhuSTBBNDMxbFFHdkYzd3NfRVJhbwZDZD";
    return (
        <div className="mini">
            <Nav />
            <div className="contact contain our-story mt_5">
                <div className="faq_container">
                    <h3 className="page-title">Our Story</h3>
                    <img src={Story} alt="our story" />
                    <p>
                        At Vo3 Designs, we create spaces that help improve health and productivity by extending your
                        indoor spaces outdoors.
                        <br />
                        We offer bespoke indoor and outdoor space solutions through design, manufacturing, and sales
                        of furniture and accessories, such as patio outdoor furniture, pergolas, WPC decks
                        planters, cladding, landscape decorations and accessories — everything to create a relaxing
                        outdoor space.
                        <br />
                        Vo3 Designs has been an outdoor space experience innovator, providing services to
                        high-end residences, resorts and hotels in Nigeria.
                        <br />
                        Vo3 is committed to creating outdoor living experiences all over Africa, through
                        innovation and partnerships with top brands to Improve health and well-being of users
                        as they stay close to nature.
                    </p>
                </div>
            </div>
            <div className="about-us">
                <div className="faq_container">
                    <Divider />
                    <div className="client-list">
                        <div className="grid_5">
                            <img src={Paystack} alt="" />
                            <img src={Landmark} alt="" />
                            <img src={Providus} alt="" />
                            <img src={Leadway} alt="" />
                            <img src={Swiss} alt="" />
                        </div>
                    </div>
                </div>
                <div className="contai">

                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default About;