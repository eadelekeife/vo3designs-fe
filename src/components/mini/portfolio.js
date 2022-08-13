import './style.css';

import React from 'react';

import _1 from '../../assets/images/content/_4.jpg';
import _2 from '../../assets/images/content/_5.jpg';
import _3 from '../../assets/images/content/_3.avif';
import _4 from '../../assets/images/content/_1.avif';
import _12 from '../../assets/images/content/_12.webp';

import { Divider } from 'antd';
import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import extra_1 from '../../assets/images/content/extra_1.webp';
import extra_2 from '../../assets/images/content/extra_2.webp';
import extra_3 from '../../assets/images/content/extra_3.webp';
import extra_4 from '../../assets/images/content/extra_4.webp';
import extra_5 from '../../assets/images/content/extra_5.webp';
import extra_6 from '../../assets/images/content/extra_6.webp';
import extra_7 from '../../assets/images/content/extra_7.webp';
import extra_8 from '../../assets/images/content/extra_8.webp';
import extra_9 from '../../assets/images/content/extra_9.webp';
import extra_10 from '../../assets/images/content/extra_10.webp';

import products1 from '../../assets/images/content/products1.webp';
import products2 from '../../assets/images/content/products2.webp';
import products3 from '../../assets/images/content/products3.webp';
import products4 from '../../assets/images/content/products4.webp';
import products5 from '../../assets/images/content/products5.webp';
import products6 from '../../assets/images/content/products6.webp';
import products7 from '../../assets/images/content/products7.webp';


import portfoliomain1 from '../../assets/images/content/portfoliomain1.webp';
import portfoliomain2 from '../../assets/images/content/portfoliomain2.webp';
import portfoliomain3 from '../../assets/images/content/portfoliomain3.webp';
import portfoliomain4 from '../../assets/images/content/portfoliomain4.webp';


import Process1 from '../../assets/images/content/process1.webp';
import Process2 from '../../assets/images/content/process2.webp';


const About = () => {
    return (
        <div className="mini">
            <Nav />
            <div className="mini_header">

            </div>
            <div className="portfolio">
                <div>
                    <div className="contain">
                        <div className="mt_4">
                            <h2 className="project_company">Ancla Technologies <span> &mdash; 5, Sanya Rd, Oba Akran Ikeja</span></h2>
                        </div>
                        <div className="grid_bias_2">
                            <img src={portfoliomain1} alt="portfolio1" />
                            <div>
                                <div className="grid_products_array">
                                    <img src={portfoliomain1} alt="extra_1" />
                                    <img src={portfoliomain2} alt="extra_1" />
                                    <img src={portfoliomain3} alt="extra_1" />
                                    <img src={portfoliomain4} alt="extra_1" />
                                </div>
                                {/* <h4>Midtown Mid-Century</h4>
                            <p>Dress your dream loft in this clean modern look, with rich Italian leathers and light
                                oak accents.</p> */}
                            </div>
                        </div>
                        <div className="portfolio_products">
                            <h3 className="product_tile_header">Items on this project</h3>
                            <div className="portfolio_products_grid">
                                <div>
                                    <img src={products1} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products6} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products3} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products4} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products5} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div>
                    <div className="contain">
                        <div className="mt_4">
                            <h2 className="project_company">Ancla Technologies <span> &mdash; 5, Sanya Rd, Oba Akran Ikeja</span></h2>
                        </div>
                        <div className="grid_bias_2">
                            <img src={portfoliomain1} alt="portfolio1" />
                            <div>
                                <div className="grid_products_array">
                                    <img src={portfoliomain1} alt="extra_1" />
                                    <img src={portfoliomain2} alt="extra_1" />
                                    <img src={portfoliomain3} alt="extra_1" />
                                    <img src={portfoliomain4} alt="extra_1" />
                                </div>
                                {/* <h4>Midtown Mid-Century</h4>
                            <p>Dress your dream loft in this clean modern look, with rich Italian leathers and light
                                oak accents.</p> */}
                            </div>
                        </div>
                        <div className="portfolio_products">
                            <h3 className="product_tile_header">Items on this project</h3>
                            <div className="portfolio_products_grid">
                                <div>
                                    <img src={products1} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products6} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products3} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products4} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products5} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div>
                    <div className="contain">
                        <div className="mt_4">
                            <h2 className="project_company">Ancla Technologies <span> &mdash; 5, Sanya Rd, Oba Akran Ikeja</span></h2>
                        </div>
                        <div className="grid_bias_2">
                            <img src={portfoliomain1} alt="portfolio1" />
                            <div>
                                <div className="grid_products_array">
                                    <img src={portfoliomain1} alt="extra_1" />
                                    <img src={portfoliomain2} alt="extra_1" />
                                    <img src={portfoliomain3} alt="extra_1" />
                                    <img src={portfoliomain4} alt="extra_1" />
                                </div>
                                {/* <h4>Midtown Mid-Century</h4>
                            <p>Dress your dream loft in this clean modern look, with rich Italian leathers and light
                                oak accents.</p> */}
                            </div>
                        </div>
                        <div className="portfolio_products">
                            <h3 className="product_tile_header">Items on this project</h3>
                            <div className="portfolio_products_grid">
                                <div>
                                    <img src={products1} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products6} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products3} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products4} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products5} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div>
                    <div className="contain">
                        <div className="mt_4">
                            <h2 className="project_company">Ancla Technologies <span> &mdash; 5, Sanya Rd, Oba Akran Ikeja</span></h2>
                        </div>
                        <div className="grid_bias_2">
                            <img src={portfoliomain1} alt="portfolio1" />
                            <div>
                                <div className="grid_products_array">
                                    <img src={portfoliomain1} alt="extra_1" />
                                    <img src={portfoliomain2} alt="extra_1" />
                                    <img src={portfoliomain3} alt="extra_1" />
                                    <img src={portfoliomain4} alt="extra_1" />
                                </div>
                                {/* <h4>Midtown Mid-Century</h4>
                            <p>Dress your dream loft in this clean modern look, with rich Italian leathers and light
                                oak accents.</p> */}
                            </div>
                        </div>
                        <div className="portfolio_products">
                            <h3 className="product_tile_header">Items on this project</h3>
                            <div className="portfolio_products_grid">
                                <div>
                                    <img src={products1} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products6} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products3} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products4} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                                <div>
                                    <img src={products5} alt="extra_1" />
                                    <h4 className="furniture_name">Carta Coffee Table</h4>
                                    <p className="furniture_amount">NGN 15,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className="faq_container">
                    <div>
                        <div className="image_block_showcase">
                            <div className="grid_5">
                                <div className="img_block">
                                    <img src={extra_1} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_2} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_3} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_4} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_5} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_6} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_7} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_8} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_9} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                                <div className="img_block">
                                    <img src={extra_10} alt="_1" />
                                    <div className="image_overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="contai">

                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default About;