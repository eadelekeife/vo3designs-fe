import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SuccessImage from "../../assets/images/shop/confirmation.png";
import Footer from '../../utils/footer';
import Nav from '../../utils/sec-nav';
import AppRoute from '../../utils/routes';

const SuccessfulCheckOut = props => {
    let [userOrderData] = useState(localStorage.getItem('userorderitem'));
    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('userorderitem');
        }, 2000)
    }, [])
    return (
        <div>
            <Nav />
            <div className="empty_div checkout-success page pt-5">
                <div>
                    <img src={SuccessImage} alt="empty" />
                    <h3>Transaction Completed!</h3>
                    {
                        userOrderData === "delivery" ?
                            <p>The delivery date for your items will be communicated with you shortly. In
                                the meantime, please call <a href="tel:+2348034652105">+2348034652105</a> for further information.</p>
                            :
                            <p>We'll contact you as soon as your item is ready to be picked up . You can
                                also contact us at <a href="tel:+2348034652105">+2348034652105</a> for more information.</p>
                    }
                    <Link className="btn_red" to={AppRoute.profile_orders}>See Transaction History</Link>
                </div>
            </div>
            <Footer />
        </div >
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(SuccessfulCheckOut);