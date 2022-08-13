import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Input, Space } from 'antd';

import Logo from '../assets/images/logo.svg';
import Cart from '../assets/images/icons/cart.svg';

import AppRoutes from "./routes";

const Nav = props => {
    const [fixedNav, setFixed] = useState(false);

    const [visibleNav, setVisibleNav] = useState(false);

    const onCloseNav = () => setVisibleNav(false);
    const { Search } = Input;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])
    return (
        <div className={`nav ${fixedNav ? 'fixed' : ''} ${props.border ? 'border' : '' }`}>
            <div className="top_nav">
                <p>Free shipping on all orders!</p>
                <div>
                    <ul>
                        <li><Link to="">Free Swatches</Link></li>
                        <li><Link to="">Showrooms</Link></li>
                        <li><Link to="">Reviews</Link></li>
                        <li><Link to="">Refer a Friend</Link></li>
                        <li><Link to="">About</Link></li>
                    </ul>
                </div>
                {/* <p>Save up to 15% With Pack Discounts + Free Shipping over $50.</p> */}
            </div>
            <div className={`navigation`}>
                <div className="innerNav">
                    <img src={Logo} alt="logo" />
                    <div className="">
                        <ul>
                            <li>
                                <Link to={AppRoutes.sofa}>Sofa</Link>
                            </li>
                            <li>
                                <Link to="/about">Tables</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Chairs</Link>
                            </li>
                            <li>
                                <Link to="/">Benches</Link>
                            </li>
                            <li>
                                <Link to="/">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about">Why Feather?</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Our Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <Search
                placeholder="search furniture type"
                onSearch={(onSearch) => console.log('hello')}
                style={{
                    width: 200,
                }}
            /> */}
                <ul>
                    <li>
                        <Link to="">
                            {/* <ion-icon name="cart-outline"></ion-icon> */}
                            <img src={Cart} alt="cart" />
                        </Link>
                    </li>
                    <li>
                        <Link to={AppRoutes.contact_us}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li className="nav_block">
                        <Link to="/signup">Create Account</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;