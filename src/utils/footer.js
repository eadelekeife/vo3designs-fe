import './style.css';

import React from 'react';

import AppRoute from '../utils/routes';

import { Link } from 'react-router-dom';
import { Input, Divider } from 'antd';

const Footer = props => {
    return (
        <div className={`footer ${props.margin ? 'margin' : ''}`}>
            <div className="first_footer">
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
            </div>
            <div className="second_footer">
                <div className="contain">
                    <div className="grid_4">
                        <div>
                            <h5>Products List</h5>
                            <ul>
                                <li>
                                    <Link to="">Tables</Link>
                                </li>
                                <li>
                                    <Link to="">Chairs</Link>
                                </li>
                                <li>
                                    <Link to="">Consoles</Link>
                                </li>
                                <li>
                                    <Link to="">Benches</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>About Us</h5>
                            <ul>
                                <li>
                                    <Link to={AppRoute.story}>Our Story</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.portfolio}>Our Portfolio</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.blog}>Our Blog</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.returns_policy}>Returns Policy</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.faqs}>Frequently Asked Questions</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.signup}>Create Account</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Resources</h5>
                            <ul>
                                <li>
                                    <Link to={AppRoute.media}>Media</Link>
                                </li>
                                <li>
                                    <Link to="/">Refer a Friend</Link>
                                </li>
                                <li>
                                    <Link to="/">Order Status</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.contact_us}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.assembly}>Assembly Instructions</Link>
                                </li>
                                <li>
                                    <Link to="/">All Products</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Contact Customer Experience</h5>
                            <ul>
                                <li>
                                    <Link to="">Email: support@vo3designs.com</Link>
                                </li>
                                <li>
                                    <Link to="">Hours:</Link>
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
                                    <Link to={AppRoute.accessibility}>Accessibilty</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.sitemap}>Sitemap</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.privacy_policy}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <p style={{display: 'inline'}}>  All rights reserved</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>15 W 27th Street, 9th Floor New York, NY, 10001</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;