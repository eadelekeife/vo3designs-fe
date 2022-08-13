import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Input } from 'antd';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

const Contact = () => {
    const { handleSubmit, control } = useForm({});
    const { TextArea } = Input;
    return (
        <div>
            <Nav />
            <div className="contact_bg">
                <h1>Contact Us</h1>
            </div>
            <div className="contact contain">
                <div className="grid_2">
                    <div>
                        <h4>Interested in WeWork?</h4>
                        <p>Simply fill out the form on the left, attach your plan and provide the details of the
                            areas you wish to have your new timber floor installed, the sub-floor we will be
                            installing on to and your timber of choice and we can provide an estimate for your
                            installation.</p>
                        <div>
                            <form>
                                <div className="form_flex">
                                    <div className="form_group">
                                        <label>First name</label>
                                        <Controller name="firstName" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3rem' }}
                                                    {...field} name="firstName" />
                                            )} />
                                    </div>
                                    <div className="form_group">
                                        <label>Last name</label>
                                        <Controller name="firstName" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3rem' }}
                                                    {...field} name="firstName" />
                                            )} />
                                    </div>
                                </div>
                                <div className="form_flex">
                                    <div className="form_group">
                                        <label>Email address</label>
                                        <Controller name="firstName" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3rem' }}
                                                    {...field} name="firstName" />
                                            )} />
                                    </div>
                                    <div className="form_group">
                                        <label>Phone number <small>(optional)</small></label>
                                        <Controller name="firstName" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3rem' }}
                                                    {...field} name="firstName" />
                                            )} />
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label>Your message</label>
                                    <TextArea name="firstName" rows="5" />
                                </div>
                                <button className="btn-accent">Get in touch with us</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Get answers to your questions.</h4>
                            <p>We would like to wish all our current and future customers a fantastic holiday
                                period. We too are taking some time off and will be closed from 4pm Tuesday 21st
                                December and re-opening 8am on Monday 10th January 2022. We look forward to working
                                with you in the new year.</p>
                            <button className="btn-accent">Read our FAQs</button>
                        </div>
                        <div className="mt_5">
                            <h5>We are also open for visits</h5>
                            <p>We would like to wish all our current and future customers a fantastic holiday period. We
                                too are taking some time off and will be closed from 4pm.</p>
                            <div className="contact_info" style={{ display: 'block' }}>
                                <ion-icon name="call-outline"></ion-icon><a href="/">+234 813 227 7316</a>
                            </div>
                            <div className="contact_info" style={{ display: 'block' }}>
                                <ion-icon name="mail-open-outline"></ion-icon><a href="/"><a href="/">eadelekeife@gmail.com</a></a>
                            </div>
                            <div className="contact_info" style={{ display: 'block' }}>
                                <ion-icon name="compass-outline"></ion-icon><a href="/"><a href="/">5, Onike street,
                                    NYSC bus stop, Igando Ikotun Lagos</a></a>
                            </div>
                            {/* <button className="btn-accent">Read our FAQs</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Contact;