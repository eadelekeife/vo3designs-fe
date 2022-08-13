import './style.css';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Input } from 'antd';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import AppRoutes from '../../utils/routes.js';

const SignIn = props => {
    const { handleSubmit, control } = useForm({});
    const { TextArea } = Input;
    return (
        <div>
            <Nav border={true} />
            <div className="auth_display">
                <div className="contain">
                    <div className="auth_box">
                        <div>
                            <h1>Sign in to your account!</h1>
                            <p>Complete the form below and a member of our team will reach out to learn more about your
                                workplace needs.</p>
                            <div>
                                <form>
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
                                        <label>Password</label>
                                        <Controller name="firstName" control={control}
                                            render={({ field }) => (
                                                <Input
                                                    style={{ height: '3rem' }}
                                                    {...field} name="firstName" />
                                            )} />
                                    </div>
                                    <button className="btn-accent full_width">Get in touch with us</button>
                                </form>
                                <div className="auth_links">
                                    <p>No account yet? <Link to={AppRoutes.signup}>Sign up here!</Link></p>
                                    <p>Forgot Password? <Link to={AppRoutes.forgot_password}>Reset password here!</Link></p>
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

export default SignIn;