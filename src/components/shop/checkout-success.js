import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SuccessImage from "../../assets/images/shop/confirmation.png";
import Footer from '../../utils/footer';
import Nav from '../../utils/sec-nav';
import AppRoute from '../../utils/routes';

const SuccessfulCheckOut = props => {

    return (
        <div>
            <Nav />
            <div className="empty_div checkout-success page pt-5">
                <div>
                    <img src={SuccessImage} alt="empty" />
                    <h3>Transaction Completed!</h3>
                    <p>Your transaction has been completed successfully and your delivery process has begun. We will deliver
                        your items on.
                    </p>
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