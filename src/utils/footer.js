import './utils.css';

import React, { useState } from 'react';

import AppRoute from '../utils/routes';

import { Link } from 'react-router-dom';
import { Input, Divider } from 'antd';

const Footer = props => {
    const [currentNav, setCurrentNav] = useState(0);
    return (
        <div className={`footer ${props.margin ? 'margin' : ''}`}>
            {/* <div className="first_footer">
                <div className="contain">
                    <div className="grid_flex">
                        <div className="append_button">
                            <Input
                                style={{ height: '3rem' }}
                                name="firstName" />
                            <button>SUBSCRIBE</button>
                        </div>
                        <div>
                            <div>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="second_footer">
                <div className="contain">
                    <div className="grid_4">
                        <div className="footer-grid-cover">
                            <div
                                onClick={() => setCurrentNav(1)}
                                className="footer-grid-title">
                                <h5>Products List</h5>
                                <ion-icon class="mobile" name="add-outline"></ion-icon>
                            </div>
                            <ul className={`${currentNav === 1 ? 'show' : ''}`}>
                                <li>
                                    <Link to="/products/Tables"><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Tables</Link>
                                </li>
                                <li>
                                    <Link to="/products/Chairs"><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Chairs</Link>
                                </li>
                                <li>
                                    <Link to="/products/Consoles"><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Consoles</Link>
                                </li>
                                <li>x
                                    <Link to="/products/Benches"><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Benches</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-cover">
                            <div
                                onClick={() => setCurrentNav(2)}
                                className="footer-grid-title">
                                <h5>About Us</h5>
                                <ion-icon class="mobile" name="add-outline"></ion-icon>
                            </div>
                            <ul className={`${currentNav === 2 ? 'show' : ''}`}>
                                <li>
                                    <Link to={AppRoute.story}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Our Story</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.shop}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Our Products</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.blog}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Our Blog</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.returns_policy}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Returns Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-cover">
                            <div
                                onClick={() => setCurrentNav(3)}
                                className="footer-grid-title">
                                <h5>Resources</h5>
                                <ion-icon class="mobile" name="add-outline"></ion-icon>
                            </div>
                            <ul className={`${currentNav === 3 ? 'show' : ''}`}>
                                <li>
                                    <Link to={AppRoute.faqs}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Frequently Asked Questions</Link>
                                </li>
                                <li>
                                    <Link to="/"><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Order Status</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.contact_us}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Contact Us</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.signup}><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Create Account</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-cover">
                            <div
                                onClick={() => setCurrentNav(4)}
                                className="footer-grid-title">
                                <h5>Reach out to us</h5>
                                <ion-icon class="mobile" name="add-outline"></ion-icon>
                            </div>
                            <ul className={`${currentNav === 4 ? 'show' : ''}`}>
                                <li>
                                    <Link to=""><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> hello@vo3designs.com</Link>
                                </li>
                                <li className="desktop">
                                    <Link to=""><span
                                        style={{ display: 'inline' }}
                                        className="mobile">&bull;</span> Hours:</Link>
                                </li>
                                <li>
                                    <Link to="">Monday to Friday — 10am to 8pm</Link>
                                </li>
                                <li>
                                    <Link to="">Saturday to Sunday — 10am to 2pm</Link>
                                </li>
                            </ul>
                            {/* <div>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                        <a href="/">+234 813 227 7316</a>
                        <p>5, Onike street, NYSC bus stop, Igando Ikotun Lagos</p> */}
                        </div>
                    </div>
                    <div className="sec_footer">
                        <div>
                            <p>&copy; 2022 Vo3 Designs</p>
                            <ul>
                                <li>
                                    <Link to={AppRoute.terms}>Terms of use</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.privacy_policy}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <p style={{ display: 'inline' }}>  All rights reserved</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer-address">The Dance Place - Behind Conoil filling Station, Eric Moore Rd, Surulere</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;