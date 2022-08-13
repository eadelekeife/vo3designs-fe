import './index.css';

import React from 'react';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import showcase1 from '../../assets/images/content/showcase1.webp';
import showcase2 from '../../assets/images/content/showcase2.webp';
import showcase3 from '../../assets/images/content/showcase3.webp';
import showcase4 from '../../assets/images/content/showcase4.webp';
import showcase5 from '../../assets/images/content/showcase5.webp';
import showcase6 from '../../assets/images/content/showcase6.webp';

import showcase7 from '../../assets/images/content/showcase7.webp';
import showcase8 from '../../assets/images/content/showcase8.webp';
import showcase9 from '../../assets/images/content/showcase9.webp';

import bombas1 from '../../assets/images/content/bombas1.webp';
import bombas2 from '../../assets/images/content/bombas2.jpg';
import bombas3 from '../../assets/images/content/bombas3.webp';
import bombas4 from '../../assets/images/content/bombas4.jpg';


import testimonial from '../../assets/images/content/testimonial.webp';

import packager from '../../assets/images/content/package.webp';
import lorry from '../../assets/images/content/lorry.webp';
import tree from '../../assets/images/content/tree.webp';


const Homepage = () => {
    return (
        <div>
            <Nav />
            <div className="header">
                <div>
                    <h3>Welcome to a new standard in furniture</h3>
                    <p>The best back-to-school essentials, bundled together so you can save and start the
                        year comfortably.</p>
                    <button>Shop Seating</button>
                </div>
            </div>
            <div>
                <div className="header_product_list mt_5">
                    <div className="contain">
                        <div className="main_top">
                            <div className="grid_4">
                                <div>
                                    <img src={bombas1} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={bombas2} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={bombas3} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={bombas4} alt="showcase1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center_text mt_5">
                    <h3>Explore each unique collection</h3>
                </div>
                <div>
                    <div className="video_banner">
                        <div className="video_cover">
                            <video className="video" loop playsinline="" autoPlay muted preload="auto">
                                <source type="video/mp4" src="https://media.graphassets.com/okjMYiS3eRh9cULy7cDg" />
                            </video>
                        </div>
                    </div>
                    <div className="vo3_props">
                        <div className="container">
                            <div className="grid_3">
                                <div>
                                    <div className="grid_2">
                                        <img src={lorry} alt="tree" />
                                        <div>
                                            <h4>Fast & free shipping</h4>
                                            <p>Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid_2">
                                        <img src={packager} alt="tree" />
                                        <div>
                                            <h4>Fast & free shipping</h4>
                                            <p>Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid_2">
                                        <img src={tree} alt="tree" />
                                        <div>
                                            <h4>Fast & free shipping</h4>
                                            <p>Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt_5">
                    <div className="contain">
                        <div>
                            <h3>Explore each unique collection</h3>
                        </div>
                        <div>
                            <div className="grid_4">
                                <div>
                                    <img src={showcase7} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={showcase8} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={showcase9} alt="showcase1" />
                                </div>
                                <div>
                                    <img src={showcase9} alt="showcase1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials mt_5">
                    <div className="grid_2">
                        <div className="grid_text_div">
                            <div className="grid_text_cover">
                                <h5>LOVED BY HOMEBODIES EVERYWHERE</h5>
                                <h4>The Burrow system works beautifully. It's comfortable, absolutely solid, and looks great.</h4>
                                <p>Michelle N Shop Index Shelves →</p>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial_image_div">
                                <img src={testimonial} alt="testimonial" className="testimonial_image" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="testimonial_footer"></div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;