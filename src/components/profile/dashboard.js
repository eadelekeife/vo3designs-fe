import './profile.css';

import React, { useState } from "react";

import { connect } from "react-redux";
import { Controller, useForm } from 'react-hook-form';
import { Divider, Input, Tabs, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from '../../utils/axiosCall';
import { useNavigate } from "react-router";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUser } from '../../utils/reducers/auth';

import SideNav from "./sidenav";
import Order from '../../assets/images/shop/profile.svg';
import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

const Dashboard = props => {

    const { TabPane } = Tabs;
    const navigate = useNavigate();
    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [size, setSize] = useState('small');
    const [loadPasswordUpdate, setLoadPasswordUpdate] = useState(false);
    const [loadPasswordError, setLoadPasswordError] = useState(false);

    const [loadUserUpdate, setLoadUserUpdate] = useState(false);
    const [loadUserError, setLoadUserError] = useState(false);

    const onChange = (e) => {
        setSize(e.target.value);
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;

    const digitsOnly = (value) => /^\d+$/.test(value);
    const signupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        password: yup.string().required('Please enter your password'),
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name')
    })

    const userValidator = yup.object().shape({
        emailAddress: yup.string().email('Email address is not valid').required('Email address field is required'),
        firstName: yup.string().required('First name field is required'),
        lastName: yup.string().required('Last name field is required'),
        phoneNumber: yup.string()
            .min(9, 'Please enter a valid phone number')
            .required('Phone number field is required')
            .test('Digits only', 'The field should have digits only', digitsOnly)
            .nullable()
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(userValidator)
    });

    const changePassword = e => {
        setLoadPasswordUpdate(true);

        axios.post('/users/update-password', {
            oldPassword: e.oldPassword,
            newPassword: e.newPassword
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => {
                console.log(data)
                if (data.data.statusMessage === 'success') {
                    navigate(0)
                    // history.go(0);
                } else {
                    setLoadPasswordError(data.data.summary);
                    setLoadPasswordUpdate(false);
                }
            })
            .catch(err => {
                console.log(err)
                setLoadPasswordError('An error occurred. Please try again later');
                setLoadPasswordUpdate(false);
            })
    }

    const updateUserInfo = e => {
        setLoadUserUpdate(true);
        let { emailAddress, firstName, lastName, phoneNumber } = e;
        axios.post('/users/update-profile', {
            emailAddress, firstName, lastName, phoneNumber
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => {
                if (data.data.statusMessage === 'success') {
                    props.updateUser(data.data.message);
                    navigate(0);
                } else {
                    setLoadUserError(data.data.summary);
                    setLoadUserUpdate(false);
                }
            })
            .catch(err => {
                setLoadUserError('An error occurred. Please try again later');
                setLoadUserUpdate(false);
            })
    }
    return (
        <div>
            <div>
                <Nav />
                <div className="main_info">
                    <SideNav />
                    <div className="profile_data">
                        <div className="profile-data-display">
                            <h3 className="product_tile_header">Profile Overview</h3>
                            <Divider style={{margin: 0, marginBottom: 10}} />
                            <div>
                                <Tabs type="mt-5 card">
                                    <TabPane tab="Basic settings" key="1">
                                        <div className="width-70">
                                            {loadUserError ?
                                                <p className="error-message">{loadUserError}</p> : ''
                                            }
                                            <form onSubmit={handleSubmit(updateUserInfo)}>
                                                <div className="form_flex">
                                                    <div className="form_group space">
                                                        <label htmlFor="firstName">First name</label>
                                                        <Controller name="firstName" control={control} defaultValue={props.auth.userDetails.firstName}
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
                                                        <Controller name="lastName" control={control} defaultValue={props.auth.userDetails.lastName}
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
                                                    <label htmlFor="phoneNumber">Phone number</label>
                                                    <Controller name="phoneNumber" control={control} defaultValue={props.auth.userDetails.phoneNumber}
                                                        render={({ field }) => {
                                                            return (
                                                                <Input type="tel" style={{ height: '3rem' }} {...field}
                                                                    name="phoneNumber" />
                                                            )
                                                        }} />
                                                    {errors.phoneNumber && <p className="errorMessage">{errors.phoneNumber.message}</p>}
                                                </div>
                                                <div className="form_group">
                                                    <label htmlFor="emailAddress">Email address</label>
                                                    <Controller name="emailAddress" control={control} defaultValue={props.auth.userDetails.emailAddress}
                                                        render={({ field }) => {
                                                            return (
                                                                <Input style={{ height: '3rem' }} disabled type="email" {...field}
                                                                    name="emailAddress" />
                                                            )
                                                        }} />
                                                    {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                                </div>
                                                <div style={{ marginTop: '5%', display: 'block' }}></div>
                                                {
                                                    !loadUserUpdate ?
                                                        <button type="submit"
                                                            className="btn-accent full_width"
                                                            style={{ display: 'block', width: "100%", height: '3rem', borderRadius: '2px' }}
                                                            id="submit-form">Update profile</button>
                                                        :
                                                        <button id="submit-form" className="btn-accent full_width"
                                                            style={{ display: 'block', width: "100%", height: '3rem', borderRadius: '2px' }}
                                                            disabled>
                                                            Updating profile.Please wait <Spin style={{ marginLeft: '10px' }} indicator={antIcon} /></button>
                                                }
                                            </form>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Change Password" key="2">
                                        <div className="width-70">
                                            {loadPasswordError ?
                                                <p className="error-message">{loadPasswordError}</p> : ''
                                            }
                                            <form onSubmit={handleSubmit(changePassword)}>
                                                <div className="form_group">
                                                    <label htmlFor="oldPassword">Old Password</label>
                                                    <Controller name="oldPassword" control={control} defaultValue=""
                                                        render={({ field }) => {
                                                            return (
                                                                <Input.Password style={{ height: '3rem' }} type="password" {...field}
                                                                    name="oldPassword" />
                                                            )
                                                        }} />
                                                    {errors.oldPassword && <p className="errorMessage">{errors.oldPassword.message}</p>}
                                                </div>
                                                <div className="form_group">
                                                    <label htmlFor="newPassword">New Password</label>
                                                    <Controller name="newPassword" control={control} defaultValue=""
                                                        render={({ field }) => {
                                                            return (
                                                                <Input.Password type="password" style={{ height: '3rem' }} {...field}
                                                                    name="newPassword" />
                                                            )
                                                        }} />
                                                    {errors.newPassword && <p className="errorMessage">{errors.newPassword.message}</p>}
                                                </div>
                                                <div style={{ marginTop: '5%', display: 'block' }}></div>

                                                {
                                                    !loadPasswordUpdate ?
                                                        <button type="submit"
                                                            className="btn-accent full_width"
                                                            style={{ display: 'block', width: "100%", height: '3rem', borderRadius: '2px' }}
                                                            id="submit-form">Update password</button>
                                                        :
                                                        <button id="submit-form"
                                                            className="btn-accent full_width"
                                                            style={{ display: 'block', width: "100%", height: '3rem', borderRadius: '2px' }}
                                                            disabled>
                                                            Updating password. Please wait <Spin style={{ marginLeft: '10px' }} indicator={antIcon} /></button>
                                                }
                                            </form>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth, loginError: state.loginError }
}

export default connect(mapStateToProps)(Dashboard);