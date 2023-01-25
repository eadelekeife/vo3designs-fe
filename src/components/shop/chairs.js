import './style.css';

import React from "react";

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import mock from '../../assets/images/shop/mock.webp';
import mock3 from '../../assets/images/shop/mock3.webp';

import Awele from '../../assets/images/products/chairs/awele.JPG';
import Chiagozie from '../../assets/images/products/chairs/chiagozie.png';
import Dining from '../../assets/images/products/chairs/dining.jpg';
import Olufemi from '../../assets/images/products/chairs/olufemi.JPG';
import Oyinda from '../../assets/images/products/chairs/oyinda.jpg';
import Plastic from '../../assets/images/products/chairs/plastic.jpg';
import Sofa from '../../assets/images/products/chairs/Sofa/06.jpg';
import LongPlastic from '../../assets/images/products/chairs/Sets/yanna.JPG';

const Shop = () => {
    return (
        <div>
            <Nav />
            <div className="mini_shop_header">

            </div>
            <div>
                <div className="products contain">
                    <div className="portfolio_products">
                        <h3 className="product_tile_header">Chairs</h3>
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
                                    <img src={Sofa} alt="extra_1" />
                                </div>
                                <h4 className="furniture_name">Carta Coffee Table</h4>
                                <p className="furniture_amount">NGN 15,000.00</p>
                            </div>
                            <div>
                                <div className="product-images">
                                    <img src={LongPlastic} alt="extra_1" />
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