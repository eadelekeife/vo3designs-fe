import './style.css';

import React from "react";

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import mock from '../../assets/images/shop/mock.webp';
import mock3 from '../../assets/images/shop/mock3.webp';

import products1 from '../../assets/images/content/products1.webp';
import products2 from '../../assets/images/content/products2.webp';
import products3 from '../../assets/images/content/products3.webp';
import products4 from '../../assets/images/content/products4.webp';
import products5 from '../../assets/images/content/products5.webp';
import products6 from '../../assets/images/content/products6.webp';
import products7 from '../../assets/images/content/products7.webp';


const Shop = () => {
    return (
        <div>
            <Nav />
            <div className="mini_shop_header">

            </div>
            <div>
                <div className="products contain">
                    <div className="portfolio_products">
                        <h3 className="product_tile_header">Sofa</h3>
                        <p className="product_query_desc">Allows you to enjoy instant and monthly cash reward from product offers and 
                            commision when you refer friends.</p>
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
            <Footer margin={true} />
        </div>
    )
}

export default Shop;