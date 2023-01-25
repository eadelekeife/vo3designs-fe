import './style.css';
import 'react-ig-feed/dist/index.css';

import React from "react";

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import InstagramFeed from 'react-ig-feed';
import { Link } from 'react-router-dom';

import portfoliomain1 from '../../assets/images/blog/picture1.jpg';
import portfoliomain2 from '../../assets/images/blog/picture2.jpg';
import { Divider } from 'antd';


const Shop = () => {
    let token = "IGQVJWbFFlVkZARMUxQc1BqZAWxoeVQwM0M2NEhKQmtmOHZADaDZA2OTRJM2JHZAmg2SVhrNUgyQ3VaOVBCZA1ByRG1kc0VIYVd1djFRLXNfTWNaeWFoeTVxUUZAJRmsyTXhuSTBBNDMxbFFHdkYzd3NfRVJhbwZDZD";
    return (
        <div>
            <Nav />
            <div className="mini_shop_header">
                <h3 className="page-title">OUR BLOG</h3>
            </div>
            <div className="blog contain">
                <div className="grid_4">
                    <div className="blog_summary">
                        <Link to="/blogspot/designing-your-outdoor-space">
                            <div className="blog_img_header">
                                <img src={portfoliomain1} alt="products1" />
                                <div className="blog_img_cover"></div>
                            </div>
                            <div className="grid_body">
                                <h3>Designing your Outdoor Space</h3>
                                <p>
                                    My outdoor space is my easiest connection to nature; and having a space where I
                                    can sit, work, and even lay down outdoors does a lot of good for my mind and body
                                    than you could possibly imagine
                                </p>
                            </div>
                            <div className="grid_footer">
                                <p>Tobi Manuel Olu</p>
                                <p>&mdash; 3rd September, 2022</p>
                            </div>
                        </Link>
                    </div>
                    <div className="blog_summary">
                        <Link to="/blogspot/5-ways-to-use-or-repurpose-wooden-crates">
                            <div className="blog_img_header">
                                <img src={portfoliomain2} alt="products1" />
                                <div className="blog_img_cover"></div>
                            </div>
                            <div className="grid_body">
                                <h3>5 ways to use or repurpose wooden crates</h3>
                                <p>
                                    Let’s start with a little description of the wooden crate. I’m sure we’ve all come 
                                    across those slatted wooden boxes or framework sometimes used for packaging 
                                    drinks, glassware, fruits, vegetables etc.
                                </p>
                            </div>
                            <div className="grid_footer">
                                <p>Adenike Adeniji-Adele</p>
                                <p>&mdash; May 05 2022</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="contain mt_5">
                <Divider />
                <h3 className="page-title">Our Social Media Presence</h3>
                {/* <InstagramFeed token={token} counter="6" /> */}
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Shop;