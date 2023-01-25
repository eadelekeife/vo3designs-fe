import React, { useState, useEffect } from "react";

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import NumberFormat from 'react-number-format';
import axiosCall from '../../utils/axiosCall';
import { Link } from 'react-router-dom';
import { Divider, Empty, notification, Skeleton, Spin } from 'antd';

const Shop = () => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [fetchingProducts, setFetchingProducts] = useState(true);
    const [searchWishList, setSearchWishList] = useState(true);
    const [saved, setSaved] = useState([]);

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }
    const pageSize = 24;

    useEffect(() => {
        axiosCall.get('/users/get-saved-items', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => {
                if (data.data.statusMessage === "success") {
                    let trend = [];
                    for (let dataToCheck of data.data.message) {
                        if (dataToCheck.Product?.productName && dataToCheck.Product?.productImage) {
                            trend.push(dataToCheck);
                        }
                    }
                    setSaved(trend);
                    setSearchWishList(false);
                }
                // else {
                //     setEmptyWishList(true);
                // }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            });
        axiosCall(`/products/trending`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setFetchingProducts(false);
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
                <div className="mt_5 products contain">
                    <div className="portfolio_products">
                        <h3 className="product_tile_header">Saved Products</h3>
                        {!searchWishList ?
                            saved.length ?
                                <div className="portfolio_products_grid">
                                    {
                                        saved.map((products, index) => (
                                            <div key={index}>
                                                <Link to={`/product_detail?productId=${products.Product.id}&product=${products.Product.productName}`}>
                                                    <div>
                                                        <div className="product-images">
                                                            <img src={products.Product.productImage} alt="extra_1" />
                                                        </div>
                                                        <h4 className="furniture_name">{products.Product.productName}</h4>
                                                        <p className="furniture_amount"><span>NGN</span>
                                                            <NumberFormat
                                                                className="new_product_amount"
                                                                value={(+products.Product.price).toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                                // <Wishlist products={saved} price={konnectPrice} param="Items in your wishlist" style={{ clear: 'both' }} />
                                :
                                <div className="empty_div saved_items_List">
                                    <div className="center-spinner">
                                        <div>
                                            <Empty description={
                                                <span>
                                                    You do not have any item in your Wishlist
                                                </span>
                                            } />
                                        </div>
                                    </div>
                                </div>
                            :
                            // <Skeleton active />
                            <div style={{ marginTop: '5%' }}>
                                <div className="grid_6">
                                    {skeleton.map((placeHolder, index) => (
                                        <div className="item" key={index}>
                                            {placeHolder}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <div className="portfolio_products products mt_5">
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
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Shop;