import './style.css';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../../utils/axiosCall';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import AppRoutes from '../../utils/routes.js';

const SignUp = props => {
    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;

    const signupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        password: yup.string().required('Please enter your password'),
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name')
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signupValidator)
    });

    const signUpUser = e => {
        setLoadingData(true);
        setErrorMessage('');
        let { firstName, lastName, emailAddress, password } = e;
        axios.post('/users/signup', {
            firstName, lastName, emailAddress, password
        })
            .then(userData => {
                if (userData.data.statusMessage === "success") {
                    window.location = `/signin`;
                } else {
                    setLoadingData(false);
                    setErrorMessage(userData.data.summary);
                }
            })
            .catch(err => {
                setLoadingData(false);
                setErrorMessage('An error occurred while saving data. Please try again.');
            })
    }
    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <h1 style={{ marginBottom: 15 }}>Create a free account!</h1>
                            {/* <p>Complete the form below and a member of our team will reach out to learn more about your
                                workplace needs.</p> */}
                            <div>
                                {
                                    errorMessage ?
                                        <p className="errorMessage">{errorMessage}</p> : ''
                                }
                                <form onSubmit={handleSubmit(signUpUser)}>
                                    <div className="form_flex">
                                        <div className="form_group space">
                                            <label htmlFor="firstName">First name</label>
                                            <Controller name="firstName" control={control}
                                                render={({ field }) => {
                                                    return (
                                                        <Input style={{ height: '3rem' }} type="text" {...field}
                                                            name="firstName" />
                                                    )
                                                }} />
                                            {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="form_group">
                                            <label htmlFor="lastName">Last name</label>
                                            <Controller name="lastName" control={control}
                                                render={({ field }) => {
                                                    return (
                                                        <Input style={{ height: '3rem' }} type="text" {...field}
                                                            name="lastName" />
                                                    )
                                                }} />
                                            {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                                        </div>
                                    </div>
                                    <div className="form_group">
                                        <label htmlFor="emailAddress">Email address</label>
                                        <Controller name="emailAddress" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Input style={{ height: '3rem' }} type="email" {...field}
                                                        name="emailAddress" />
                                                )
                                            }} />
                                        {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                    </div>
                                    <div className="form_group">
                                        <label htmlFor="password">Password</label>
                                        <Controller name="password" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Input.Password type="password" style={{ height: '3rem' }} {...field}
                                                        name="password" />
                                                )
                                            }} />
                                        {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                                    </div>
                                    <div style={{ display: 'block', marginBottom: 0 }}>
                                        {
                                            loadingData
                                                ?
                                                <button className="btn-accent full_width">
                                                    <span style={{ marginRight: '10px' }}>Creating Account. Please wait...</span>
                                                    <Spin indicator={antIcon} /></button>
                                                :
                                                <button className="btn-accent full_width">Create Account</button>
                                        }
                                    </div>
                                    <p
                                        style={{ marginBottom: 0 }}
                                        className="link">Have an account already? <Link to={AppRoutes.signin}>Sign In here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(SignUp);