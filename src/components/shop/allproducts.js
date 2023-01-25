import './style.css';

import React, { useEffect, useState } from "react";
import { notification, Skeleton } from 'antd';
import { useParams, Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';
import axiosCall from '../../utils/axiosCall';

const AllProducts = () => {

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

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }
    const pageSize = 24;

    useEffect(() => {
        let categoryName = parameters.categoryName;
        axiosCall(`/products/all`)
            .then(data => {
                console.log(data)
                if (data.data.statusMessage === "success") {
                    setFetchingProducts(false);
                    setAllProducts(data.data.message);
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
            <div className="mini_shop_header">

            </div>
            <div>
                <div className="products contain">
                    <div className="portfolio_products">
                        {
                            !fetchingProducts ?
                                allProducts.length > 0 ?
                                    <div className="portfolio_products_grid">
                                        {
                                            allProducts.map((products, index) => (
                                                <div key={index}>
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