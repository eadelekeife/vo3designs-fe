import { Divider } from 'antd';
import React from 'react';

import { Link } from 'react-router-dom';
import AppRoutes from '../../utils/routes';

const SideNav = () => {
    return (
        <div>
            <div className="profile_nav">
                <div className="fix-nav">
                    <ul>
                        <li><ion-icon name="person-outline"></ion-icon> Your Account</li>
                    </ul>
                    <Divider style={{margin: 0, padding: 0, marginBottom: 10}} />
                    <ul>
                        <li>
                            <Link to={AppRoutes.profile_dashboard}><ion-icon name="home-outline"></ion-icon> Profile Overview</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.profile_orders}><ion-icon name="alarm-outline"></ion-icon> Previous Orders</Link>
                        </li>
                        {/* <li>
                            <Link to={AppRoutes.profile_delivery_details}><ion-icon name="compass-outline"></ion-icon> Delivery details</Link>
                        </li> */}
                        <li>
                            <Link to={AppRoutes.profile_saved_items}><ion-icon name="pricetags-outline"></ion-icon> Saved Items</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.faqs}><ion-icon name="help-circle-outline"></ion-icon> Frequently asked questions</Link>
                        </li>
                        <li>
                            <Link to={AppRoutes.returns_policy}><ion-icon name="cog-outline"></ion-icon> Returns Policy</Link>
                        </li>
                        <li>
                            <Link to="/signout"><ion-icon name="log-out-outline"></ion-icon> Log out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav;