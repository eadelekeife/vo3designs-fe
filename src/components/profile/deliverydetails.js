import './profile.css';

import React, { useState, useEffect } from "react";

import { Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { Input, Select, notification, Divider } from 'antd';
import StatesData from '../../utils/states';
import axios from '../../utils/axiosCall';
import { connect } from 'react-redux';

import SideNav from "./sidenav";
import Order from '../../assets/images/shop/profile.svg';
import { updateUser } from '../../utils/reducers/auth';
import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

const DeliveryDetails = props => {

    const { TextArea } = Input;
    const { Option } = Select;
    const navigate = useNavigate();
    const [nigerianStatesData, setNigerianStatesData] = useState([]);
    const [nigerianLGAData, setNigerianLGAData] = useState([]);
    const [deliveryState, setDeliveryState] = useState(props.auth.userDetails.state);
    const [deliveryHouseAddress, setDeliveryHouseAddress] = useState(props.auth.userDetails.houseAddress);
    const [deliveryLGA, setDeliveryLGA] = useState(props.auth.userDetails.lga);

    const { handleSubmit, control, setValue, formState: { errors } } = useForm({});

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };

    useEffect(() => {
        let allStates = [];
        for (let states of Object.keys(StatesData)) {
            allStates.push(states);
        }
        setNigerianStatesData(allStates);
        if(props.auth.userDetails.state) {
            setNigerianLGAData(StatesData[props.auth.userDetails.state]);
            setValue('deliveryLGA', deliveryLGA);
        }
    }, [])

    const updateLGAList = e => {
        setValue('deliveryLGA', '');
        setDeliveryLGA('');
        setDeliveryState(e);
        setNigerianLGAData(StatesData[e]);
    };

    const submitMe = e => {
        let { houseAddress } = e;
        axios.post('/users/update-delivery-address', {
            state: deliveryState, lga: e.deliveryLGA, houseAddress
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(userUpdated => {
                if (userUpdated.data.statusMessage === "success") {
                    props.updateUser(userUpdated.data.message);
                    navigate(0);
                } else {
                    openNotificationWithIcon('error', userUpdated.data.summary);
                }
            })
            .catch(err => {
                console.log(err)
                openNotificationWithIcon('error', 'Could not load data. Please reload page to try again.');
            })
    }

    return (
        <div>
            <Nav />
            <div className="main_info">
                <SideNav />
                <div className="profile_data">
                    <div className="profile-data-display">
                        <h3>Order History</h3>
                        <Divider style={{ marginTop: 0 }} />
                        {/* <div className="banner_div">
                            <div className="grid_2">
                                <div>
                                    <h3>Your Default Delivery Details</h3>
                                    <p>And nothing to pay. So go shopping quickly</p>
                                </div>
                                <div>
                                    <img src={Order} alt="order" />
                                </div>
                            </div>
                        </div> */}
                        <div className="mt_3 width-70">
                            <form onSubmit={handleSubmit(submitMe)}>
                                <div className="form_flex">
                                    <div className="form_group">
                                        <label>Delivery State</label>
                                        <Controller name="deliveryState" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Select
                                                        style={{ width: '100%', height: '3.5rem' }}
                                                        defaultValue={deliveryState}
                                                        onChange={updateLGAList}
                                                    >
                                                        {
                                                            nigerianStatesData.map((states, index) => (
                                                                <Option value={states} key={index}>{states}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                )
                                            }} />
                                    </div>
                                    <div className="form_group">
                                        <label>Local Government</label>
                                        <Controller name="deliveryLGA" control={control}
                                            render={({ field }) => {
                                                return (
                                                    <Select
                                                        style={{ width: '100%', height: '3.5rem' }}
                                                        defaultValue={deliveryLGA} {...field}>
                                                        {
                                                            nigerianLGAData.map((lga, index) => (
                                                                <Option value={lga} key={index}>{lga}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                )
                                            }} />
                                        {errors.deliveryLGA && <p className="errorMessage">{errors.deliveryLGA.message}</p>}
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label>House address</label>
                                    <Controller name="houseAddress" control={control} defaultValue={deliveryHouseAddress}
                                        render={({ field }) => (
                                            <TextArea
                                                rows="5"
                                                {...field} name="houseAddress" />
                                        )} />
                                </div>
                                <button className="btn-accent full_width">Set your delivery information</button>
                            </form>
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
};

export default connect(mapStateToProps, { updateUser })(DeliveryDetails);