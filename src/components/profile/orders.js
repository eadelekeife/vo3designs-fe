import './profile.css';

import React, { useEffect, useState } from "react";

import { Divider, notification, Skeleton, Drawer, Spin, Modal } from 'antd';
import axiosCall from '../../utils/axiosCall';
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import { DateTime } from 'luxon';


import EmptyHistory from '../../assets/images/profile/empty_history.svg';

import SideNav from "./sidenav";
import Order from '../../assets/images/shop/profile.svg';
import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';
import AppRoutes from '../../utils/routes';
import { Link } from 'react-router-dom';

const TransactionHistory = props => {
    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };
    const [userPlans, setUserPlans] = useState([]);
    const [orderItemsBox, setOrderItemsBox] = useState([]);
    const [loadingdata, setLoadingData] = useState(true);
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [currentDetail, setCurrentDetail] = useState({});
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const [userData] = useState(props.auth.isAuthenticated ? props.auth.userDetails : '');
    useEffect(() => {
        axiosCall.get(`/users/orders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(userPlans => {
                if (userPlans.data.statusMessage === "success") {
                    setLoadingData(false);
                    setUserPlans(userPlans.data.message);
                    let orderData = [];
                    userPlans.data.message.forEach(orders => {
                        orders.OrderedItems.forEach((items, index) => {
                            let orderProducts = {
                                image: items.Product.productImage,
                                name: items.Product.productName,
                                quantity: items.quantity,
                                deliveryStatus: orders.deliveryStatus,
                                deliveryDate: orders.deliveryDate,
                                price: items.itemPrice,
                                transactionId: orders.inHouseTransactionId,
                                createdAt: orders.createdAt,
                                amountToPay: orders.amountToPay,
                                houseAddress: orders.houseAddress,
                                localGovernment: orders.localGovernment,
                                inHouseTransactionId: orders.inHouseTransactionId

                            }
                            orderData.push(orderProducts);
                        })
                    })
                    setOrderItemsBox(orderData);
                } else {
                    setLoadingData(false);
                    setErrorOccurred(true);
                    openNotificationWithIcon('error', userPlans.data.summary);
                }
            })
            .catch(err => {
                console.log(err)
                setErrorOccurred(true);
                setLoadingData(false)
            })
    }, [])
    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }
    return (
        <div>
            <Nav />
            <div className="main_info">
                <SideNav />
                <div className="profile_data">
                    <div className="profile-data-display">
                        <div>
                            <h3 className="product_tile_header">Order History</h3>
                            <Divider style={{ margin: 0, marginBottom: 10 }} />
                            <div>
                                {
                                    loadingdata ?
                                        <div>
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
                                            userPlans.length ?
                                                <div>
                                                    <div className="product-orders-grid">
                                                        {
                                                            orderItemsBox.map((order, index) => (
                                                                <div key={index}>
                                                                    <div className="product-image-grid">
                                                                        <div>
                                                                            <img src={order.image} alt="product" />
                                                                        </div>
                                                                        <div>
                                                                            <h4>{order.name}</h4>
                                                                            {/* <p>{order.transactionId}</p> */}
                                                                            <p>{DateTime.fromISO(order.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                                                            <p><span className="currency">NGN </span>
                                                                                <NumberFormat className="new_product_amount" value={order.price} displayType={'text'} thousandSeparator={true} /> &mdash; ({order.quantity})</p>
                                                                            {/* <p className={order.deliveryStatus === "delivered" ? 'delivered' : 'processing'}>{order.deliveryStatus}</p> */}
                                                                            <div>
                                                                                <button
                                                                                    className="btn-accent small desktop"
                                                                                    onClick={() => {
                                                                                        setCurrentDetail(order)
                                                                                        setOpenDetailsModal(true)
                                                                                    }}>See Details</button>
                                                                                <button
                                                                                    className="btn-accent small mobile"
                                                                                    onClick={() => {
                                                                                        setCurrentDetail(order)
                                                                                        setOpenDetails(true)
                                                                                    }}>See Details</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                :
                                                <div className="empty_div prev-orders">
                                                    <div>
                                                        <img src={EmptyHistory} alt="empty" />
                                                        {/* <h3>An empty space...</h3> */}
                                                        <p>You have not placed any orders yet</p>
                                                        <Link to="/products/Stools" className="btn_red">View Products</Link>
                                                    </div>
                                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Drawer className="cart-detail-drawer"
                style={{ display: 'block' }} visible={openDetails}
                title={null} placement="bottom" onClose={() => setOpenDetails(true)}>
                <Spin spinning={spinnerLoading}>
                    <div>
                        <div className="cart-detail">
                            <ul>
                                <li>
                                    <span>Name :</span>
                                    <span>{currentDetail.name}</span>
                                </li>
                                <li>
                                    <span>Quantity :</span>
                                    <span>{currentDetail.quantity}</span>
                                </li>
                                <li>
                                    <span>Date :</span>
                                    <span>{DateTime.fromISO(currentDetail.createdAt).toLocaleString(DateTime.DATE_HUGE)}</span>
                                </li>
                                <li>
                                    <span>Amount :</span>
                                    <span><span className="currency">NGN</span><NumberFormat className="new_product_amount" value={currentDetail.amountToPay} displayType={'text'} thousandSeparator={true} /></span>
                                </li>
                                <li>
                                    <span>Transaction ID :</span>
                                    <span>{currentDetail.inHouseTransactionId}</span>
                                </li>
                                <li>
                                    <span>Delivery Status :</span>
                                    <span>{currentDetail.deliveryStatus}</span>
                                </li>
                                <li>
                                    <span>Address :</span>
                                    <span>{currentDetail.houseAddress}, {currentDetail.localGovernment}</span>
                                </li>
                            </ul>
                            <button
                                className="btn-accent full_width"
                                onClick={() => setOpenDetails(false)}>Close</button>
                        </div>
                    </div>
                </Spin>
            </Drawer>
            <Modal
                className="cart-detail-drawer"
                footer={null}
                title={null} visible={openDetailsModal}
                onOk={() => setOpenDetailsModal(false)} onCancel={() => setOpenDetailsModal(true)}>
                <Spin spinning={spinnerLoading}>
                    <div>
                        <div className="cart-detail">
                            <ul>
                                <li>
                                    <span>Name :</span>
                                    <span>{currentDetail.name}</span>
                                </li>
                                <li>
                                    <span>Quantity :</span>
                                    <span>{currentDetail.quantity}</span>
                                </li>
                                <li>
                                    <span>Date :</span>
                                    <span>{DateTime.fromISO(currentDetail.createdAt).toLocaleString(DateTime.DATE_HUGE)}</span>
                                </li>
                                <li>
                                    <span>Amount :</span>
                                    <span><span className="currency">NGN</span><NumberFormat className="new_product_amount" value={currentDetail.amountToPay} displayType={'text'} thousandSeparator={true} /></span>
                                </li>
                                <li>
                                    <span>Transaction ID :</span>
                                    <span>{currentDetail.inHouseTransactionId}</span>
                                </li>
                                <li>
                                    <span>Delivery Status :</span>
                                    <span>{currentDetail.deliveryStatus}</span>
                                </li>
                                <li>
                                    <span>Address :</span>
                                    <span>{currentDetail.houseAddress}, {currentDetail.localGovernment}</span>
                                </li>
                            </ul>
                            <button
                                className="btn-accent full_width"
                                onClick={() => setOpenDetailsModal(false)}>Close</button>
                        </div>
                    </div>
                </Spin>
            </Modal>
        </div>
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(TransactionHistory);