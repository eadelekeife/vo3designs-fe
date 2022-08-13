import './profile.css';

import React from "react";

import { Table } from 'antd';

import _1 from '../../assets/images/content/_4.jpg';

import SideNav from "./sidenav";
import Order from '../../assets/images/shop/profile.svg';

const Dashboard = () => {
    return (
        <div className="main_info">
            <SideNav />
            <div className="profile_data">
                <div className="banner_div">
                    <div className="grid_2">
                        <div>
                            <h3>No invoices yet</h3>
                            <p>And nothing to pay. So go shopping quickly</p>
                        </div>
                        <div>
                            <img src={Order} alt="order" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Order History</h3>
                    <div className="order_records">
                        <div className="order_data">
                            <div className="order_inner_flex">
                                <img src={_1} alt="furniture" />
                                <h3>Saka Odu Relaxation Chair</h3>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>delivered</p>
                            </div>
                        </div>
                        <div className="order_data">
                            <div className="order_inner_flex">
                                <img src={_1} alt="furniture" />
                                <h3>Saka Odu Relaxation Chair</h3>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>delivered</p>
                            </div>
                        </div>
                        <div className="order_data">
                            <div className="order_inner_flex">
                                <img src={_1} alt="furniture" />
                                <h3>Saka Odu Relaxation Chair</h3>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <p>NGN50,000.00</p>
                            </div>
                            <div>
                                <p>delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;