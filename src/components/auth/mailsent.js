import './style.css';

import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

const SignIn = props => {

    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <div>
                                <div className="form auth reset">
                                    <h3>Reset Konnect Password</h3>
                                    <p>We have sent you an e-mail with instructions on how to reset your password. Check your inbox or spam folder and click on the link provided.</p>
                                    <div style={{ marginBottom: '20px' }}></div>
                                    <Link to="/signin">Have an account already? <span>Sign In here</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(SignIn);