import './style.css';

import React, { useEffect, useState } from "react";
import { notification, Skeleton } from 'antd';
import { useParams, Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';
import axiosCall from '../../utils/axiosCall';

const SingleProduct = () => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };
    const parameters = useParams();
    const [allProducts, setAllProducts] = useState([]);
    const [fetchingProducts, setFetchingProducts] = useState(true);
    const [trendingProducts, setTrendingProducts] = useState([]);

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }
    const pageSize = 24;

    useEffect(() => {
        setAllProducts([]);
        setFetchingProducts(false);
        setTrendingProducts([]);
        let categoryName = parameters.categoryName;
        axiosCall(`/products/category/${categoryName}`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setFetchingProducts(false);
                    setAllProducts(data.data.message.Products);
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            })
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
    }, [parameters.categoryName])
    return (
        <div>
            <Nav />
            {/* <div className="mini_shop_header">

            </div> */}
            <div>
                <div className="products contain mt_5">
                    <div className="portfolio_products">
                        <h3 className="product_tile_header">{parameters.categoryName.slice(0, 1).toUpperCase()}{parameters.categoryName.slice(1).toLowerCase()}</h3>
                        {
                            !fetchingProducts ?
                                allProducts.length > 0 ?
                                    <div className="portfolio_products_grid">
                                        {
                                            allProducts.map((products, index) => (
                                                <div key={index}>
                                                    <Link
                                                        // onClick={}
                                                        to={`/product_detail?productId=${products.id}&product=${products.productName}`}>
                                                        <div>
                                                            {/* <div>
                                                                <ion-icon name="search-outline"></ion-icon>
                                                            </div> */}
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

export default SingleProduct;