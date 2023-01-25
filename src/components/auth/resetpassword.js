import './style.css';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { Input, notification, Spin } from 'antd';
import { loginUser } from '../../utils/reducers/auth';
import * as yup from 'yup';
import { LoadingOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';
import axios from '../../utils/axiosCall';

const SignIn = props => {

    const antIcon = (<LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />);
    const [errorMessage, setErrorMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: 'Reset link complete',
            description: message
        });
    };

    const validator = yup.object().shape({
        password: yup.string().min(6).required('Password field can not be empty')
    })

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        defaultValue: {
            password: "",
        },
        resolver: yupResolver(validator)
    });
    const signInUser = e => {
        setSendingMessage(true);
        axios.post('/users/resetpassword', {
            newPassword: e.password,
            jwtToken: window.location.search.split('recoveryCode=')[1]
        })
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setValue('password', '');
                    setSendingMessage(false);
                    openNotificationWithIcon('success', `Your password has been reset successfully. Please login with your new password to continue.`);
                } else {
                    setErrorMessage(data.data.summary);
                    setSendingMessage(false);
                }
            })
            .catch(err => {
                setErrorMessage('Could not reset password. Please try again');
                setSendingMessage(false);
            })
    }
    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <h1 style={{ marginBottom: 15 }}>Reset Password!</h1>
                            {/* <p>Complete the form below and a member of our team will reach out to learn more about your
                                workplace needs.</p> */}
                            <div>
                                {
                                    errorMessage ?
                                        <p className="errorMessage">{errorMessage}</p> : ''
                                }
                                <form onSubmit={handleSubmit(signInUser)}>
                                    <div className="form-group">
                                        <label htmlFor="password">Enter new password</label>
                                        <Controller name="password" defaultValue="" control={control}
                                            render={
                                                ({ field }) => (
                                                    <Input.Password {...field} id="password"
                                                        type="password" style={{ height: '3.5rem' }} />
                                                )
                                            } />
                                        {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                                    </div>
                                    <div style={{ marginTop: '1%' }}></div>
                                    {
                                        !sendingMessage
                                            ?
                                            <button className="btn-accent"
                                                style={{ width: '100%', borderRadius: '3px', height: '3.5rem' }} id="submit-form">Reset password</button>
                                            :
                                            <button id="submit-form" className="btn-accent" disabled={true}
                                                style={{ width: '100%', height: '3.5rem', borderRadius: '3px' }} type="submit">
                                                <Spin indicator={antIcon} /></button>
                                    }
                                </form>
                                <div style={{ marginTop: '1%' }}></div>
                                <Link style={{ display: 'block' }} to="/signin">Have an account already? <span>Sign In here</span></Link>
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