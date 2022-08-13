import React from 'react';

import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <div className="profile_nav">
                <div>
                    <ul>
                        <li>
                            <Link to="/"><ion-icon name="home-outline"></ion-icon> Account Information</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="alarm-outline"></ion-icon> Previous Orders</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="compass-outline"></ion-icon> Delivery details</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="cart-outline"></ion-icon> Cart</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="pricetags-outline"></ion-icon> Saved Items</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="help-circle-outline"></ion-icon> Frequently asked questions</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="information-circle-outline"></ion-icon> Help</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="cog-outline"></ion-icon> Privacy Policies</Link>
                        </li>
                        <li>
                            <Link to="/"><ion-icon name="log-out-outline"></ion-icon> Log out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav;