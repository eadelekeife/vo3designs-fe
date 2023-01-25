import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Input, Space, Menu, Dropdown, Drawer, notification, Select, Spin, Divider, Skeleton } from 'antd';
import NumberFormat from 'react-number-format';
import axiosCall from './axiosCall';
import { connect } from 'react-redux';
// import Empty from "../assets/images/auth/empty.svg";
import Empty from '../assets/images/profile/empty_history.svg';

import portfoliomain1 from '../assets/images/content/_1.png';
import portfoliomain2 from '../assets/images/content/_2.png';
import portfoliomain3 from '../assets/images/content/_3.png';
import portfoliomain4 from '../assets/images/content/_4.png';

import MobileMenu from '../assets/images/icons/mobilemenu.png';

import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/icons/cart.png';
import ColorBar from '../assets/images/icons/rgb.png';
import Cancel from "../assets/images/x.svg";

import AppRoutes from "./routes";

const Nav = props => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };

    const { Option } = Select;
    const options = [];
    for (let index = 1; index <= 20; index++) {
        options.push(index);
    };

    const [fixedNav, setFixed] = useState(false);
    const [visibleNav, setVisibleNav] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [open, setOpen] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');
    const [categoryData, setCategoryData] = useState([]);
    const [categoryBox, setCategoryBox] = useState([]);
    const [fetchingData, setFetchingData] = useState(true);
    const [navContent, setNavContent] = useState('default-display');
    const [cartPrice, setCartPrice] = useState(0);
    const [portfolioData, setPortfolioData] = useState([]);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    const onSearch = value => {
        window.location.href = `/search/${value}`;
    };

    const onCloseNav = () => setVisibleNav(false);
    const { Search } = Input;

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
        axiosCall(`/category/all`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setFetchingData(false);
                    let dataBox = [];
                    data.data.message.forEach((category, index) => {
                        let dataToUse = {
                            key: index + 1,
                            label: <Link to={`/products/${category.categoryName}`}>
                                {category.categoryName}
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </Link>
                        }
                        dataBox.push(dataToUse);
                    })
                    setCategoryData(dataBox);
                    setCategoryBox(data.data.message);
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            })

        axiosCall(`/products/portfolio/all-portfolio-categories`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    let dataBox = [];
                    setPortfolioData(data.data.message);
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            })
    }, [])
    const rentals = (
        <div className="runMyDrowdown">
            <div className="dropdown-cover">
                <div className="dropdown-list">
                    <Menu
                        items={categoryData}
                    />
                </div>
                <div>
                    <div
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
                        className="portfolio_products_grid">
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain1} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain2} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain3} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain4} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const portfolio = (
        <div className="runMyDrowdown portfolio-list">
            <div className="dropdown-cover">
                <div className="dropdown-list">
                    <div className="break">
                        {
                            portfolioData.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <h4>{category.categoryName}</h4>
                                        <ul>
                                            {
                                                category.portfolioCompanies.map((company, index) => (
                                                    <li
                                                        onClick={() => {
                                                            setMobileNav(false)
                                                        }}
                                                    >
                                                        <Link
                                                            to={`/portfolio/${company.companyName}/${company.id}`}>
                                                            {company.companyName}
                                                            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
                        className="portfolio_products_grid">
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain1} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain2} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain3} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                        <div>
                            <img
                                style={{ height: '100%', width: '100%' }}
                                src={portfoliomain4} alt="extra_1" />
                            {/* <p>Creating images should be a simple.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const fetchCart = () => {
        setFetchingData(true);
        axiosCall.post('/users/cart', {
            cartId: localStorage.getItem('cart-token'),
            userId: props.auth.userDetails.id
        })
            .then(userCart => {
                if (userCart.data.statusMessage === "success") {
                    setCartData(userCart.data.message);
                    let totalCartOrder = 0;
                    userCart.data.message.forEach((cart) => {
                        totalCartOrder += cart.Product.price * cart.quantity
                    })
                    setCartPrice(totalCartOrder);
                    setErrorOccurred(false);
                    setFetchingData(false);
                } else {
                    setErrorOccurred(true);
                    setFetchingData(false);
                    openNotificationWithIcon('error', 'An error occurred while fetching products from cart. Please try again');
                }
            })
            .catch(err => {
                setErrorOccurred(true);
                setFetchingData(false);
                openNotificationWithIcon('error', 'An error occurred while fetching products from cart. Please try again');
            })
    }

    const reloadCart = cartData => {
        let cartBox = [];
        cartData.forEach(cart => {
            if (cart?.Product) {
                cartBox.push(cart);
                let totalCartOrder = 0;
                cartBox.forEach((cart) => {
                    totalCartOrder += cart.Product.price * cart.quantity
                })
                setCartPrice(totalCartOrder);
                // temporaryOrderSize += (+cart?.Product.weight * +cart.quantity);
                // let unitPrice = ((konnectPrice * cart?.Product.sellerPrice) / 100) + Number(cart?.Product.sellerPrice) > Number(cart?.Product.marketPrice)
                //     ? cart?.Product.marketPrice * parseInt(cart.quantity) :
                //     ((((konnectPrice * cart?.Product.sellerPrice) / 100) + Number(cart?.Product.sellerPrice)) * parseInt(cart.quantity));

                // temporarySubTotal += unitPrice;
            }
        });
        setCartData(cartBox);
        // setSubTotal(temporarySubTotal);
        // setOrderSize(temporaryOrderSize);
    }

    const updateCartQuantity = (e, id) => {
        setSpinnerLoading(true);
        axiosCall.post(`/users/update-cart`, {
            cartId: id,
            quantity: e,
            productId: id,
            userId: props.auth.userDetails.id,
            cartToken: localStorage.getItem('cart-token')
        })
            .then(data => {
                if (data.data.statusMessage === 'success') {
                    reloadCart(data.data.message);
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

    const removeProductFromCart = (id) => {
        setSpinnerLoading(true);
        axiosCall.post(`/users/remove-cart`, {
            productId: id,
            userId: props.auth.userDetails.id,
            cartId: localStorage.getItem('cart-token')
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
            .then(data => {
                if (data.data.statusMessage === 'success') {
                    reloadCart(data.data.message);
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

    const showCartDrawer = () => {
        setOpen(true);
        fetchCart();
    }

    return (
        <div>
            <div
                className={`nav ${fixedNav ? 'fixed' : ''} ${props.border ? 'border' : ''}`}>
                <div className="top_nav">
                    <p>Explore our uniquely designed furniture</p>
                    <div>
                        <ul>
                            <li><Link to="">&bull; Follow us on Instagram</Link></li>
                            <li><Link to="">&bull; Refer a Friend</Link></li>
                            <li><Link to="">&bull; About Us</Link></li>
                        </ul>
                    </div>
                    {/* <p>Save up to 15% With Pack Discounts + Free Shipping over $50.</p> */}
                </div>
                <div className={`navigation`}>
                    <div className="innerNav">
                        <Link to="/">
                            <img src={Logo} alt="logo" className="logo" />
                        </Link>
                        <div className="desktop">
                            <ul>
                                <li>
                                    <Dropdown className="dropme" class="helllos"
                                        overlay={rentals}>
                                        <Link to="#">
                                            Products
                                        </Link>
                                    </Dropdown>
                                </li>
                                <li>
                                    <Link to="/story">Our Story</Link>
                                </li>
                                <li>
                                    <Dropdown
                                        overlay={portfolio}>
                                        <Link to="#">Our Portfolio</Link>
                                    </Dropdown>
                                </li>
                                <li>
                                    <Link to="/blog">Our Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="desktop">
                        <li>
                            <Link
                                onClick={e => {
                                    e.preventDefault();
                                    showCartDrawer()
                                }}
                                to="">
                                <img src={Cart} alt="cart" />
                            </Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.contact_us}>
                                Contact
                            </Link>
                        </li>
                        {
                            props.auth.isAuthenticated ?
                                <li className="nav_block">
                                    <Link to={AppRoutes.profile_dashboard}>
                                        Hi, {props.auth.userDetails.firstName} {props.auth.userDetails.lastName}
                                    </Link>
                                </li>
                                :
                                <React.Fragment>
                                    <li>
                                        <Link to="/signin">Sign In</Link>
                                    </li>
                                    <li className="nav_block">
                                        <Link to="/signup">Create Account</Link>
                                    </li>
                                </React.Fragment>
                        }
                    </ul>
                    <div className="mobile">
                        <ul>
                            <li onClick={() => showCartDrawer()}>
                                <img src={Cart} alt="cart icon" />
                            </li>
                            <li onClick={() => setMobileNav(true)}>
                                <img src={MobileMenu} alt="menu icon" />
                            </li>
                        </ul>
                    </div>
                </div>
                <Drawer
                    style={{ display: 'block' }} visible={open}
                    title={null} placement="right" onClose={onClose}>
                    <Spin spinning={spinnerLoading}>
                        <div className="cart-content">
                            <div className="new-cart-header">
                                <h2>Your Cart</h2>
                                <img onClick={onClose} src={Cancel} alt="Cancel" />
                            </div>
                            <Divider style={{ marginTop: 0 }} />
                            <div className="cart-data">
                                {
                                    fetchingData ?
                                        <div className="cart-content">
                                            {skeleton.map((placeHolder, index) => (
                                                <div className="item" key={index}>
                                                    {placeHolder}
                                                    <Divider />
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        errorOccurred ?
                                            <div className="center_align_message">
                                                <div>
                                                    <h3>Oops!</h3>
                                                    <p>An error occurred while we were trying to fetch data. Please reload page to
                                                        try again.</p>
                                                </div>
                                            </div>
                                            :
                                            cartData.length ?
                                                <div className="cart-inner-content">
                                                    {
                                                        cartData.map((cart, index) => (
                                                            <div key={index}>
                                                                <div className="cart-grid-3">
                                                                    <div className="cart-image-cover">
                                                                        <img src={cart?.Product?.productImage} alt={cart?.Product?.productName} />
                                                                    </div>
                                                                    <div className="">
                                                                        <h3>{cart?.Product?.productName}</h3>
                                                                        {
                                                                            +cart?.Product?.discount > 0 ?
                                                                                <div className="merch-price-grid">
                                                                                    <p className="merch_price strikethrough"><span className="currency">NGN </span>
                                                                                        <NumberFormat className="new_product_amount" value={cart?.Product?.price} displayType={'text'} thousandSeparator={true} />
                                                                                    </p>
                                                                                    <p className="merch_price"><span className="currency">NGN </span>
                                                                                        <NumberFormat className="new_product_amount" value={((cart?.Product?.discount * cart?.Product?.price) / 100)} displayType={'text'} thousandSeparator={true} />
                                                                                    </p>
                                                                                </div>
                                                                                :
                                                                                <p className="merch_price"><span className="currency">NGN </span>
                                                                                    <NumberFormat className="new_product_amount" value={cart?.Product?.price} displayType={'text'} thousandSeparator={true} />
                                                                                </p>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <Select
                                                                            onChange={e => updateCartQuantity(e, cart.id)}
                                                                            defaultValue={+cart.quantity}>
                                                                            {
                                                                                options.map((option) => (
                                                                                    <Option value={+option} key={option}>{option}</Option>
                                                                                ))
                                                                            }
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                                <div className="mt_5"></div>
                                                                <div className="grid_flex">
                                                                    <div
                                                                        className="color_bar selectedColor">
                                                                        {
                                                                            cart.color === "other" ?
                                                                                <img src={ColorBar} alt="colorbar" />
                                                                                :
                                                                                <div
                                                                                    style={{ background: cart.color, height: 'inherit', width: 'inherit' }}>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                    <ion-icon
                                                                        onClick={() => removeProductFromCart(cart.id)}
                                                                        name="trash-outline"></ion-icon>
                                                                </div>
                                                                <Divider style={{ marginTop: 0 }} />
                                                            </div>
                                                        ))
                                                    }
                                                    <Link to={AppRoutes.checkout} className="btn_red">Go to Checkout: <span className="currency"> NGN</span><NumberFormat className="new_product_amount" value={cartPrice} displayType={'text'} thousandSeparator={true} /></Link>
                                                </div>
                                                :
                                                <div className="empty_div">
                                                    <div>
                                                        <img src={Empty} alt="empty" />
                                                        <h3>You have not added any product to cart yet</h3>
                                                    </div>
                                                </div>
                                }
                            </div>
                        </div>
                    </Spin>
                </Drawer>
                <Drawer
                    style={{ display: 'block' }} visible={mobileNav}
                    title={null} placement="right" onClose={onClose}>
                    <Spin spinning={spinnerLoading}>
                        <div className="mobile-nav">
                            {navContent === "default-display" ?
                                <div>
                                    <div className="inner-mobile-nav">
                                        <Link to="/">
                                            <img src={Logo} alt="logo" className="logo" />
                                        </Link>
                                        <div onClick={() => setMobileNav(false)}>
                                            <img src={Cancel} alt="menu icon" className="cancel-button" />
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setNavContent('product');
                                                }}
                                                to="">Products <ion-icon name="add-circle-outline"></ion-icon></Link>
                                        </li>
                                        {
                                            props.auth.isAuthenticated ?
                                                <li
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setNavContent('auth');
                                                    }}
                                                    className="nav_block">
                                                    <Link to="">
                                                        Hi, {props.auth.userDetails.firstName} {props.auth.userDetails.lastName} <ion-icon name="add-circle-outline"></ion-icon>
                                                    </Link>
                                                </li>
                                                :
                                                <React.Fragment>
                                                    <li>
                                                        <Link onClick={() => setMobileNav(false)}
                                                            to={AppRoutes.signin}>Sign In <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                    </li>
                                                    <li className="nav_block">
                                                        <Link onClick={() => setMobileNav(false)}
                                                            to={AppRoutes.signup}>Create Account <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                    </li>
                                                </React.Fragment>
                                        }
                                        <li>
                                            <Link
                                                onClick={() => setMobileNav(false)}
                                                to={AppRoutes.story}>Our Story <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setNavContent('portfolio')
                                                }}
                                                to="">Our Portfolio <ion-icon name="add-circle-outline"></ion-icon></Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setMobileNav(false)}
                                                to={AppRoutes.blog}>Our Blog <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setMobileNav(false)}
                                                to={AppRoutes.contact_us}>Contact <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => setMobileNav(false)}
                                                to={AppRoutes.returns_policy}>Returns Policy <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                        </li>
                                    </ul>
                                </div>
                                :
                                navContent === "product" ?
                                    <div>
                                        <div className="inner-mobile-nav">
                                            <h3>Products</h3>
                                            <div onClick={() => setNavContent('default-display')}>
                                                <ion-icon class="cancel-button" name="arrow-back-circle-outline"></ion-icon>
                                                {/* <img src={Cancel} alt="menu icon" className="cancel-button" /> */}
                                            </div>
                                        </div>
                                        <ul>
                                            {
                                                categoryBox.map((category, index) => {
                                                    return (
                                                        <li
                                                            key={index}>
                                                            <Link
                                                                onClick={() => setMobileNav(false)}
                                                                to={`/products/${category.categoryName}`}>
                                                                {category.categoryName}
                                                                <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    :
                                    navContent === "auth" ?
                                        <div>
                                            <div className="inner-mobile-nav">
                                                <h3>Account Information</h3>
                                                <div onClick={() => setNavContent('default-display')}>
                                                    <ion-icon class="cancel-button" name="arrow-back-circle-outline"></ion-icon>
                                                    {/* <img src={Cancel} alt="menu icon" className="cancel-button" /> */}
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to={AppRoutes.profile_dashboard}>Profile Overview <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to={AppRoutes.profile_orders}>Previous Orders <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to={AppRoutes.profile_saved_items}>Saved Items <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to={AppRoutes.faqs}>Frequently asked questions <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to={AppRoutes.returns_policy}>Returns Policy <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setMobileNav(false)} to="/signout">Log out <ion-icon name="arrow-forward-circle-outline"></ion-icon></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        :
                                        <div>
                                            <div>
                                                <div className="inner-mobile-nav">
                                                    <h3>Portfolio</h3>
                                                    <div onClick={() => setNavContent('default-display')}>
                                                        <ion-icon class="cancel-button" name="arrow-back-circle-outline"></ion-icon>
                                                        {/* <img src={Cancel} alt="menu icon" className="cancel-button" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="portfolio-list-display">
                                                {
                                                    portfolioData.map((category, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <h5>{category.categoryName}</h5>
                                                                <ul>
                                                                    {
                                                                        category.portfolioCompanies.map((company, index) => (
                                                                            <li
                                                                                onClick={() => {
                                                                                    setMobileNav(false)
                                                                                }}
                                                                            ><Link to={`/portfolio/${company.companyName}/${company.id}`}>
                                                                                    {company.companyName}
                                                                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                                                                </Link></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                            }
                        </div>
                    </Spin>
                </Drawer>
            </div>
            <div className="mobile">
                <div className="search">
                    <Input.Search placeholder="search product name" onSearch={onSearch} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = store => (
    { auth: store.auth }
)

export default connect(mapStateToProps)(Nav);