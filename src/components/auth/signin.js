import './style.css';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Input, notification, Spin } from 'antd';
import { loginUser, clearLoginError } from '../../utils/reducers/auth';
import * as yup from 'yup';
import { LoadingOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import AppRoutes from '../../utils/routes.js';

const SignIn = props => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />;

    const validator = yup.object().shape({
        emailAddress: yup.string().email('Email is not valid').required('Email field can not be empty'),
        password: yup.string().min(6).required('Password field can not be empty')
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validator)
    });
    useEffect(() => {
        if (localStorage.getItem('new-account')) {
            openNotificationWithIcon('success', 'Account created successfully and an email was sent to your inbox! Please log in to continue.');
            localStorage.removeItem('new-account');
        }
        if (props.auth.isAuthenticated) {
            window.location = AppRoutes.profile_dashboard;
        }
        if (props.loginError.loginError.length) {
            props.clearLoginError();
            setErrorMessage(props.loginError.loginError);
            setLoadingData(false);
        }
    }, [props.auth, props.loginError]);
    const signInUser = e => {
        setLoadingData(true);
        setErrorMessage('');
        let { emailAddress, password } = e;
        props.loginUser({
            emailAddress, password
        });
    }
    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <h1 style={{ marginBottom: 15 }}>Sign in to your account!</h1>
                            <div>
                                {
                                    errorMessage ?
                                        <p className="errorMessage">{errorMessage}</p> : ''
                                }
                                <form onSubmit={handleSubmit(signInUser)}>
                                    <div className="form_group">
                                        <label>Email address</label>
                                        <Controller name="emailAddress" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3.5rem' }}
                                                    {...field} name="emailAddress" />
                                            )} />
                                        {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                    </div>
                                    <div className="form_group">
                                        <label>Password</label>
                                        <Controller name="password" control={control}
                                            render={({ field }) => (
                                                <Input.Password
                                                    style={{ height: '3.5rem' }}
                                                    {...field} name="password" />
                                            )} />
                                        {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                                    </div>
                                    {
                                        !loadingData ?
                                            <button
                                                style={{ height: '3.5rem' }}
                                                className="btn-accent full_width">Sign In</button>
                                            :
                                            <button
                                                style={{ height: '3.5rem' }}
                                                disabled
                                                className="btn-accent full_width"><Spin indicator={antIcon} /></button>
                                    }
                                </form>
                                <div className="auth_links">
                                    <p>No account yet? <Link to={AppRoutes.signup}>Sign up here!</Link></p>
                                    <p>Forgot Password? <Link to={AppRoutes.reset_send_mail}>Reset password here!</Link></p>
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

export default connect(mapStateToProps, { loginUser, clearLoginError })(SignIn);