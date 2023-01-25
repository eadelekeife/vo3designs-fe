import './style.css';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Input, Spin, notification } from 'antd';
import { loginUser } from '../../utils/reducers/auth';
import * as yup from 'yup';
import { LoadingOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';

import axios from '../../utils/axiosCall';
import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

const SignIn = props => {

    const antIcon = (<LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />);
    const [errorMessage, setErrorMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: 'Reset link sent',
            description: message
        });
    };

    const validator = yup.object().shape({
        emailAddress: yup.string().email('Email is not valid').required('Email field can not be empty'),
    })

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        defaultValue: {
            emailAddress: ""
        },
        resolver: yupResolver(validator)
    });
    const submitMe = e => {
        setSendingMessage(true);
        axios.post('/users/sendrecoveryemail', {
            emailAddress: e.emailAddress
        })
            .then(data => {
                if (data.data.statusMessage === "success") {
                    openNotificationWithIcon('success', `If an account exists for ${e.emailAddress}, you will receive password reset instructions.`);
                    setValue('emailAddress', '');
                    setSendingMessage(false);
                } else {
                    setErrorMessage(data.data.message);
                    setSendingMessage(false);
                }
            })
            .catch(err => {
                setErrorMessage('Could not send mail. Please try again');
                setSendingMessage(false);
            })
        // let { emailAddress, password } = e;
    }
    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <h1 style={{ marginBottom: 15 }}>Reset Password</h1>
                            {/* <p>Complete the form below and a member of our team will reach out to learn more about your
                                workplace needs.</p> */}
                            <div>
                                {
                                    errorMessage ?
                                        <p className="errorMessage">{errorMessage}</p> : ''
                                }
                                <form onSubmit={handleSubmit(submitMe)}>
                                    <div className="form-group">
                                        <label htmlFor="emailAddress" style={{ width: '100%' }}>Email address</label>
                                        <Controller control={control} defaultValue="" name="emailAddress"
                                            render={({ field }) => (
                                                <Input {...field} id="emailAddress" style={{ width: '100%', height: '3.5rem' }}
                                                    type="email" />
                                            )
                                            } />
                                        {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                    </div>
                                    <div style={{ marginTop: '1%' }}></div>
                                    {
                                        !sendingMessage
                                            ?
                                            <button id="submit-form" className="btn-accent"
                                                style={{ width: '100%', height: '3.5rem', borderRadius: '3px' }} type="submit">Reset Password</button>
                                            :
                                            <button id="submit-form" className="btn-accent" disabled={true}
                                                style={{ width: '100%', height: '3.5rem', borderRadius: '3px' }} type="submit">
                                                <Spin indicator={antIcon} /></button>
                                    }
                                </form>
                                <div className="auth_links">
                                    <p>Have an account already? <Link to="/signin">Sign In Here</Link></p>
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
    return { auth: state.auth, loginError: state.loginError }
}

export default connect(mapStateToProps, { loginUser })(SignIn);