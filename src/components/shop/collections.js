import './style.css';

import React, { useEffect, useState } from "react";
import { notification, Skeleton } from 'antd';
import { useParams, Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';
import axiosCall from '../../utils/axiosCall';


import Showcase1 from '../../assets/images/homepage/dining.jpg';
import Showcase2 from '../../assets/images/homepage/chairs.jpg';
import Showcase3 from '../../assets/images/new/bed.jpg';
import Showcase4 from '../../assets/images/new/stool.jpg';
import showcase7 from '../../assets/images/homepage/table.jpg';
import showcase8 from '../../assets/images/homepage/console.jpg';
import showcase9 from '../../assets/images/homepage/sunbed.jpg';
import showcase10 from '../../assets/images/homepage/bench1.jpg';

const AllProducts = () => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };
    const [fetchingProducts, setFetchingProducts] = useState(true);
    const [trendingProducts, setTrendingProducts] = useState([]);

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }

    useEffect(() => {
        axiosCall(`/products/trending`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setTrendingProducts(data.data.message);
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            })
    }, [])

    return (
        <div>
            <Nav />
            <div>
                <div className="products">
                    <div className="header_product_list mt_5">
                        <div className="contain">
                            <div>
                                <h3 className="product_tile_header">Our Collections</h3>
                            </div>
                            <div className="main_top">
                                <div className="grid_4">
                                    <div>
                                        <Link to="/products/Dining">
                                            <img src={Showcase1} alt="showcase1" />
                                            <h4>Dining</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Beds">
                                            <img src={Showcase3} alt="showcase1" />
                                            <h4>Beds</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Chairs">
                                            <img src={Showcase2} alt="showcase1" />
                                            <h4>Chairs</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Stools">
                                            <img src={Showcase4} alt="showcase1" />
                                            <h4>Stools</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Tables">
                                            <img src={showcase7} alt="showcase1" />
                                            <h4>Tables</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Consoles">
                                            <img src={showcase8} alt="showcase1" />
                                            <h4>Consoles</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Sunbeds">
                                            <img src={showcase9} alt="showcase1" />
                                            <h4>Sunbeds</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Benches">
                                            <img src={showcase10} alt="showcase1" />
                                            <h4>Benches</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="portfolio_products products contain mt_5">
                        <div>
                            <h3>Other products to checkout</h3>
                        </div>
                        {
                            !fetchingProducts ?
                                trendingProducts.length > 0 ?
                                    <div className="portfolio_products_grid">
                                        {
                                            trendingProducts.map((products, index) => (
                                                <div
                                                    className={`${index === (trendingProducts.length - 1) ? 'mobile' : ''}`}
                                                    key={index}>
                                                    <Link to={`/product_detail?productId=${products.id}&product=${products.productName}`}>
                                                        <div>
                                                            <div className="product-images">
                                                                <img src={products.productImage} alt="extra_1" />
                                                            </div>
                                                            <h4 className="furniture_name">{products.productName}</h4>
                                                            <p className="furniture_amount"><span>NGN</span>
                                                                <NumberFormat
                                                                    className="new_product_amount"
                                                                    value={(+products.price).toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="grid_6">
                                        {skeleton.map((placeHolder, index) => (
                                            <div className="item" key={index}>
                                                {placeHolder}
                                            </div>
                                        ))}
                                    </div>
                                :
                                <div className="grid_6">
                                    {skeleton.map((placeHolder, index) => (
                                        <div className="item" key={index}>
                                            {placeHolder}
                                        </div>
                                    ))}
                                </div>
                        }
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default AllProducts;