import './style.css';

import React, { useEffect, useState } from "react";

import { Controller, useForm } from 'react-hook-form';
import { Collapse, notification, Skeleton, Spin, Select } from 'antd';
import axiosCall from '../../utils/axiosCall';
import NumberFormat from 'react-number-format';
import { Link, useSearchParams } from 'react-router-dom';
import { connect } from "react-redux";

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import likeEmoji from '../../assets/images/icons/heart.svg';
import likeFilledEmoji from '../../assets/images/icons/filled_heart.svg';
import ColorBar from '../../assets/images/icons/rgb.png';

const Shop = props => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };

    const [searchParams, setSearchParams] = useSearchParams();
    const [productData, setProductData] = useState({});
    const [userId] = useState(props.auth.isAuthenticated ? props.auth.userDetails.id : null);
    const [productInWishList, setProductInWishList] = useState(false);
    const [productInCart, setProductInCart] = useState(false);
    const [productCartData, setProductCartData] = useState({});
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const [spinnerMessage, setSpinnerMessage] = useState('');
    const [addWishList, setAddWishList] = useState(false);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [fetchingProducts, setFetchingProducts] = useState(true);
    const [currentColor, setCurrentColor] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [imageBox, setImageBox] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [productCartQuantity, setProductCartQuantity] = useState(1);
    const [currentCartId, setCurrentCartId] = useState('');
    const [productColorsBox, setProductColorsBox] = useState([]);

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }

    const updateCartQuantity = (id) => {
        setSpinnerLoading(true);
        axiosCall.post(`/users/update-cart-data`, {
            cartId: id,
            quantity: productCartQuantity,
            productId: id,
            userId: props.auth.userDetails.id,
            cartToken: localStorage.getItem('cart-token'),
            color: currentColor
        })
            .then(data => {
                if (data.data.statusMessage === 'success') {
                    // reloadCart(data.data.message);
                    openNotificationWithIcon('success', data.data.summary);
                    setSpinnerLoading(false);
                } else {
                    openNotificationWithIcon('error', 'An error occurred while updating cart. Please try again');
                    setSpinnerLoading(false);
                }
            })
            .catch(err => {
                setSpinnerLoading(false);
                openNotificationWithIcon('error', 'An error occurred while updating cart. Please try again');
            })
    }

    const { Option } = Select;
    const options = [];
    for (let index = 1; index <= 20; index++) {
        options.push(index);
    };

    const { handleSubmit, control, getValues, watch, setValue } = useForm({});
    const { Panel } = Collapse;
    const text = `The middle child of our lineup of L sectionals is hardly one to be ignored. It’s
                                    well-rounded and perfect for medium-sized living rooms.`

    useEffect(() => {
        setSpinning(true);
        setFetchingProducts(true);
        setProductData({});
        setProductInWishList(false);
        setProductInCart(false);
        setProductCartData({});
        setProductCartQuantity(0);
        setCurrentColor('');
        setValue('quantity-select-box', +1);

        let productName = searchParams.get('productId');
        axiosCall(`/products/productById/${productName}`, {
            headers: {
                Authorization: `Bearer ${userId}`,
                cartId: localStorage.getItem('cart-token') ? localStorage.getItem('cart-token') : ''
            }
        })
            .then(data => {
                if (data.data.statusMessage === "success") {
                    if (!data.data.message.productData.productColors.length) {
                        setProductColorsBox([]);
                        setCurrentColor('other');
                    } else {
                        setProductColorsBox(data.data.message.productData.productColors);
                    }
                    setFetchingProducts(false);
                    setSpinning(false);
                    setProductData(data.data.message.productData);
                    let extraImageBox = [data.data.message.productData.productImage];
                    for (let imageList of data.data.message.productData.ProductImages) {
                        extraImageBox.push(imageList.imageLink);
                    }
                    setImageBox(extraImageBox);
                    data.data.message.saved ? setProductInWishList(true) : setProductInWishList(false);
                    if (data.data.message.cartData) {
                        setProductInCart(true);
                        setCurrentCartId(data.data.message.cartData.id);
                        setProductCartData(data.data.message.cartData);
                        setProductCartQuantity(+data.data.message.cartData.quantity);
                        setCurrentColor(data.data.message.cartData.color);
                        setValue('quantity-select-box', +data.data.message.cartData.quantity);
                    };
                } else {
                    setSpinning(false);
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                setSpinning(false);
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
    }, [searchParams.get('productId')])

    useEffect(() => {
        if (getValues('quantity-select-box')) {
            setProductCartQuantity(getValues('quantity-select-box'))
        }
    }, [watch('quantity-select-box')])

    const selectItemColor = e => {
        setCurrentColor(e)
    }

    const addProductToCart = id => {
        if (currentColor) {
            setSpinning(true)
            axiosCall.post('/products/cart/new', {
                color: currentColor,
                quantity: productCartQuantity,
                productId: id,
                userId: props.auth.userDetails.id,
                cartId: localStorage.getItem('cart-token')
            })
                .then(async cartResponse => {
                    if (cartResponse.data.statusMessage === "success") {
                        setCurrentCartId(() => cartResponse.data.message.currentCartId);
                        setProductInCart(true);
                        localStorage.setItem('cart-token', cartResponse.data.message.cartId);
                        setSpinning(false);
                        openNotificationWithIcon('success', 'Product added to cart successfully');
                    } else {
                        setSpinning(false);
                        openNotificationWithIcon('error', 'An error occurred while adding product to cart. Please try again');
                    }
                })
                .catch(err => {
                    setSpinning(false);
                    openNotificationWithIcon('error', 'An error occurred while adding product to cart. Please try again');
                })
        } else {
            openNotificationWithIcon('error', 'Please select color')
        }
    }

    const addToWishList = e => {
        e.preventDefault();
        // let currentText = document.querySelector('form#addWishList button').innerHTML;
        // document.querySelector('form#addWishList button').setAttribute('disabled', true);
        setAddWishList(true)
        setSpinning(true);
        setSpinnerMessage('Please wait...');
        axiosCall.post('/users/saved-items', {
            productId: productData.id,
            UserId: userId,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => {
                setAddWishList(false);
                if (data.data.statusMessage === "success") {
                    if (data.data.summary === "Product saved in wishlist") {
                        setProductInWishList(true);
                        setSpinning(false);
                        openNotificationWithIcon('success', data.data.summary);
                    } else if (data.data.summary === "Product removed from wishlist") {
                        setProductInWishList(false);
                        setSpinning(false);
                        openNotificationWithIcon('success', data.data.summary);
                    }
                } else {
                    setSpinning(false);
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                console.log(err)
                setAddWishList(false)
            })
    }

    const nextProductImage = () => {
        if (currentImage !== (imageBox.length - 1)) {
            setCurrentImage(currentImage + 1);
        }
    }

    const previousProductImage = () => {
        if (currentImage !== 0) {
            setCurrentImage(currentImage - 1);
        }
    }

    return (
        <div>
            <Spin spinning={spinning}>
                <Nav border={true} />
                <div className="contain single_product_detail">
                    <div className="grid_2">
                        <div className="product_detail_image"
                        >
                            {
                                !fetchingProducts ?
                                    <div>
                                        {
                                            imageBox.length > 1 ?
                                                <div className="product-carousel-cover">
                                                    <img src={imageBox[currentImage]} className="product_detail_main" alt={productData?.productName} />
                                                    <div
                                                        onClick={() => nextProductImage()}
                                                        className={`forward icon-block ${currentImage === (imageBox.length - 1) ? 'blur-out' : ''}`}>
                                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                                    </div>
                                                    <div
                                                        onClick={() => previousProductImage()}
                                                        className={`backward icon-block ${currentImage === 0 ? 'blur-out' : ''}`}>
                                                        <ion-icon name="chevron-back-outline"></ion-icon>
                                                    </div>
                                                </div>
                                                :
                                                <img src={imageBox[0]} className="product_detail_main" alt={productData?.productName} />
                                        }
                                    </div>
                                    : <Skeleton.Image active />
                            }
                        </div>
                        <div className="product_detail_info">
                            <div className="grid_flex">
                                <div>
                                    <h2>{!fetchingProducts ? productData?.productName : <Skeleton.Button active />}</h2>
                                    {/* <p className="amount"><span className="currency">NGN</span> 99,999.00</p> */}
                                    <p className="amount"><span className="currency">NGN</span>
                                        <NumberFormat
                                            className="new_product_amount"
                                            value={(+productData.price).toFixed(2)} displayType={'text'} thousandSeparator={true} />
                                    </p>
                                </div>
                                <div>
                                    {
                                        props.auth.isAuthenticated ?
                                            <form onSubmit={addToWishList} id="addWishList">
                                                <button className="gray_border"
                                                >{productInWishList ?
                                                    // 'Remove from WishList'
                                                    <img src={likeFilledEmoji}
                                                        className="likeEmoji"
                                                        alt="like emoji" />
                                                    :
                                                    // 'Add to WishList'
                                                    <img src={likeEmoji}
                                                        className="likeEmoji"
                                                        alt="like emoji" />
                                                    }
                                                </button>
                                            </form>
                                            :
                                            <div>
                                                <Link className="gray_border" to="/signin">
                                                    <img src={likeEmoji}
                                                        className="likeEmoji"
                                                        alt="like emoji" />
                                                </Link>
                                            </div>
                                    }
                                </div>
                            </div>
                            {/* <p className="product_detail">{!fetchingProducts ? productData?.description : <Skeleton active />}</p> */}
                            <p className="product_detail">
                                We offer the perfect combination of quality, design, sustainability, and customer
                                service. We are confident that you will love our products, and we can't wait to
                                help you create the perfect space for your home or office.
                            </p>
                            {/* <p className="product_detail">Please note that production and delivery usually takes between 25 - 30 working days and production timeline
                                increases by a minimum of 5 working days for multiple orders.</p> */}
                            <p className="product_detail">Fabric or Dimension customization attracts an additional cost. Please reach out to our customer support team to
                                make your desired specification after your order is completed.
                            </p>
                            <div className="product-detail-desc">
                                <div className="inline_block">
                                    <p className="desktop">Color:</p>
                                    <div className="inline_display">
                                        <div>
                                            {
                                                productColorsBox.length ?
                                                    productColorsBox.map((color, index) => {
                                                        return (
                                                            <div key={index}
                                                                onClick={() => selectItemColor(color.colorCode)}
                                                                className={`color_bar ${currentColor === color.colorCode ? 'selectedColor' : ''}`}>
                                                                <div style={{ background: color.colorCode, height: 'inherit', width: 'inherit' }}>
                                                                    <ion-icon name="checkmark-outline"></ion-icon>
                                                                </div>
                                                            </div>
                                                        )
                                                    }) :
                                                    <div
                                                        onClick={() => selectItemColor('other')}
                                                        className={`color_bar ${currentColor === 'other' ? 'selectedColor' : ''}`}>
                                                        <img src={ColorBar} alt="colorbar" />
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="inline_block dimension">
                                    <div className="mobile"></div>
                                    <p className="desktop">Dimension:</p>
                                    <div className="inline_display">
                                        <div>
                                            <div className="dimension_box">{!fetchingProducts ? productData?.dimension : ''}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'block', marginTop: '5%' }}></div>
                            <div className="product-detail-cart-grid">
                                <div>
                                    <Controller control={control} defaultValue={+productCartQuantity} name="quantity-select-box"
                                        render={({ field }) => {
                                            return (
                                                <Select {...field}
                                                    // onChange={e => setProductCartQuantity(e)}
                                                    // onChange={e => updateCartQuantity(e, cart.id)}
                                                    defaultValue={+productCartQuantity}
                                                >
                                                    {
                                                        options.map((option) => (
                                                            <Option value={+option} key={option}>{option}</Option>
                                                        ))
                                                    }
                                                </Select>
                                            )
                                        }}
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        productInCart ? updateCartQuantity(currentCartId) : addProductToCart(productData.id)
                                    }}
                                    className="btn-accent full_width">
                                    {
                                        productInCart ? 'Update Product In Cart' : 'Add to Cart'
                                    }
                                </button>
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
                <Footer margin={true} />
            </Spin>
        </div>
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(Shop);