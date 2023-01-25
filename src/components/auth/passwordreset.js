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
                                    <div className="form-text reset">
                                        <h3>Password reset complete</h3>
                                        <p>Your password has been reset successfully.
                                            <div style={{ marginBottom: '20px' }}></div>
                                            <Link to="/signin"><span>Log in now</span></Link></p>
                                    </div>
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