import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Nav from '../../utils/sec-nav';
import axiosCall from '../../utils/axiosCall';
import Footer from '../../utils/footer';

import { Input, notification, Spin } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import locationMap from '../../assets/images/content/locationmap.jpg';

const Contact = props => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff', marginLeft: 20 }} spin />;

    const [loadMessageButton, setLoadMessageButton] = useState(false);

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            placement: 'bottomRight',
            description:
                message,
        });
    };

    const messageValidator = yup.object().shape({
        firstName: yup.string().required('Please let us know who you are'),
        lastName: yup.string().required('Please let us know who you are'),
        emailAddress: yup.string().required('Please let us know how to contact you').email(),
        message: yup.string().required('Please let us know waht you think'),
    })

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(messageValidator)
    });

    const handleContact = e => {
        let { firstName, lastName, emailAddress, phoneNumber, message } = e;
        setLoadMessageButton(true);
        axiosCall.post('/users/contact-us', {
            firstName, lastName, emailAddress, phoneNumber, message
        }).
            then(data => {
                setLoadMessageButton(false);
                if (data.data.statusMessage === "success") {
                    setValue('firstName', props.auth.isAuthenticated ? props.auth.userDetails.firstName : '');
                    setValue('lastName', props.auth.isAuthenticated ? props.auth.userDetails.lastName : '');
                    setValue('emailAddress', props.auth.isAuthenticated ? props.auth.userDetails.emailAddress : '');
                    setValue('phoneNumber', props.auth.isAuthenticated ? props.auth.userDetails.phoneNumber : '');
                    setValue('message', '');
                    openNotificationWithIcon('success', 'Thank you for your willingness to partner with us. We will reach out to you shortly');
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                setLoadMessageButton(false);
                openNotificationWithIcon('error', 'An error occurred while saving data. Please try again later');
            })
    }
    return (
        <div>
            <Nav />
            <div className="contact_bg">
                <h1>Contact Us</h1>
            </div>
            <div className="contact contain">
                <div className="grid_2">
                    <div>
                        <h4>Reach out to Us</h4>
                        <div className="mt_3">
                            <form autoComplete="off" onSubmit={handleSubmit(handleContact)}>
                                <div className="form_flex">
                                    <div className="form_group space">
                                        <label htmlFor="firstName">First name</label>
                                        <Controller name="firstName" defaultValue={
                                            props.auth.isAuthenticated ?
                                                props.auth.userDetails.firstName
                                                : ''
                                        } control={control}
                                            render={
                                                ({ field }) => (
                                                    <Input {...field} id="firstName"
                                                        type="text" style={{ height: '3.5rem' }} />
                                                )
                                            } />
                                        {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="form_group">
                                        <label htmlFor="lastName">Last name</label>
                                        <Controller name="lastName" defaultValue={
                                            props.auth.isAuthenticated ?
                                                props.auth.userDetails.lastName
                                                : ''
                                        } control={control}
                                            render={
                                                ({ field }) => (
                                                    <Input {...field} id="lastName"
                                                        type="text" style={{ height: '3.5rem' }} />
                                                )
                                            } />
                                        {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                                    </div>
                                </div>
                                <div className="form_flex">
                                    <div className="form_group">
                                        <label htmlFor="emailAddress">Email address</label>
                                        <Controller name="emailAddress"
                                            defaultValue={
                                                props.auth.isAuthenticated ?
                                                    props.auth.userDetails.emailAddress
                                                    : ''
                                            } control={control}
                                            render={
                                                ({ field }) => (
                                                    <Input type="email" id="emailAddress" {...field} style={{ height: '3.5rem' }} />
                                                )} />
                                        {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                    </div>
                                    <div className="form_group">
                                        <label>Phone number <small>(optional)</small></label>
                                        <Controller name="phoneNumber" control={control}
                                            render={({ field }) => (
                                                <Input type="tel"
                                                    style={{ height: '3.5rem' }}
                                                    {...field} name="phoneNumber" />
                                            )} />
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="message">Message</label>
                                    <Controller name="message" defaultValue="" control={control}
                                        render={
                                            ({ field }) => (
                                                <Input.TextArea rows={4} {...field} id="message" />
                                            )
                                        } />
                                    {errors.message && <p className="errorMessage">{errors.message.message}</p>}
                                </div>
                                <div style={{ marginTop: '7%' }}></div>
                                <div className="">
                                    {
                                        !loadMessageButton ?
                                            <button style={{ display: 'block', width: "100%", height: '3.5rem' }} className="btn-accent no_border">Send message</button>
                                            :
                                            <button
                                                disabled
                                                style={{ display: 'block', width: "100%", height: '3.5rem' }} className="btn-accent no_border" id="modal-button" disabled>
                                                Sending message. Please wait.<Spin indicator={antIcon} /></button>
                                    }
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <h3>Or you can message us directly</h3>
                        <div className="sticky_compartment">
                            <p>For general inquiries, please call <a href="tel:+2348034652105">0803 465 2105</a>
                            </p>
                            <p>For issues with our product delivery, please call <a href="tel:+2348034652105">0803 465 2105</a></p>
                            <p className="mt_3">To understand what we do and a better insight into how we work, kindly
                                visit our Instagram page @vo3designs</p>
                        </div>
                        <img src={locationMap} style={{ width: 'unset', height: 'unset' }} alt="locationMap" />
                        <div className="sticky_social">
                            <div>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div >
    )
}

const mapStateToProps = store => {
    return { auth: store.auth };
};

export default connect(mapStateToProps)(Contact);