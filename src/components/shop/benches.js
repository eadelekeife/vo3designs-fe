import './style.css';

import React from "react";

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import mock from '../../assets/images/shop/mock.webp';
import mock3 from '../../assets/images/shop/mock3.webp';

import Awele from '../../assets/images/products/benches/ife.JPG';
import Chiagozie from '../../assets/images/products/benches/kemi.jpg';
import Dining from '../../assets/images/products/benches/kemi2.jpg';
import Olufemi from '../../assets/images/products/benches/lavaar.JPG';
import Oyinda from '../../assets/images/products/benches/pelumi.jpg';
import Plastic from '../../assets/images/products/benches/pelumi2.jpg';
import Plastic2 from '../../assets/images/products/benches/text.jpg';

const Shop = () => {
    return (
        <div>
            <Nav />
            <div className="mini_shop_header">

            </div>
            <div>
                <div className="products contain">
                    <div className="portfolio_products">
                        <h3 className="product_tile_header">Benches</h3>
                        <div className="portfolio_products_grid">
                            <div>
                                <div className="product-images">
                                    <img src={Awele} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Chiagozie} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Dining} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Olufemi} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Oyinda} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Plastic} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={Plastic2} alt="extra_1" />
                                </div>
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