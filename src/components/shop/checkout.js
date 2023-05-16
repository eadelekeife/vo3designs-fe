import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Input, Select, Spin, notification, Radio, Space, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from '../../utils/axiosCall';
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axiosCall from "../../utils/axiosCall";
import { usePaystackPayment } from "react-paystack";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import StatesData from '../../utils/states';
import NumberFormat from 'react-number-format';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';

import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

import ArrowLeft from '../../assets/images/icons/arrow-left-circle.svg';
import ArrowRight from '../../assets/images/icons/arrow-right-circle.svg';

import AppRoute from '../../utils/routes';

const CheckOut = props => {

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    const Navigate = useNavigate();
    const { Option } = Select;
    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [deliveryType, setDeliveryType] = useState('delivery');

    const [towns, setLga] = useState([]);
    const [nigerianStatesData, setNigerianStatesData] = useState([]);
    const [nigerianLGAData, setNigerianLGAData] = useState([]);
    const [deliveryState, setDeliveryState] = useState('Lagos');
    const [deliveryHouseAddress, setDeliveryHouseAddress] = useState('');
    const [deliveryLGA, setDeliveryLGA] = useState('');
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState(0);
    const [deliveryEmail, setDeliveryEmail] = useState(0);
    const [fetchingData, setFetchingData] = useState(true);
    const [fetchingCheckoutData, setFetchingCheckoutData] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [orderTotalCost, setOrderTotalCost] = useState(0);
    const [cartTotalCost, setCartTotalCost] = useState(0);
    const [userFormData, setUserFormData] = useState({});
    const [formDataToShow, setFormDataToShow] = useState('shippingType');
    const [dateToUse, setDateToUse] = useState([]);
    const [deliveryDate, setDeliveryDate] = useState('');
    const [tax, setTax] = useState(7.5);

    const [deliveryStates] = useState(['ikoyi', 'vi', 'marina', 'lekki I', 'lekki II-ajah', 'yaba', 'opebi-ikeja', 'surulere-festac', 'gbagada-magodo I']);

    const privateKey = process.env.REACT_APP_PAYSTACK_KEY;
    const [uuidv4] = useState(uuid());

    const [amount, setAmount] = useState(80000); // Remember, set in kobo!

    const fetchCart = () => {
        axiosCall.post('/users/cart', {
            cartId: localStorage.getItem('cart-token'),
            userId: props.auth.userDetails.id
        })
            .then(userCart => {
                if (userCart.data.statusMessage === "success") {
                    let cartTotalCost = 0;
                    userCart.data.message.forEach((cart) => {
                        let itemPrice = +cart.Product.discount ? ((cart.Product.discount * cart.Product.price) / 100) : cart.Product.price;
                        cartTotalCost += +(cart.quantity * +itemPrice);
                    })
                    let taxToAdd = ((tax * cartTotalCost) / 100);
                    setOrderTotalCost(+cartTotalCost + +taxToAdd);
                    setCartTotalCost(cartTotalCost);
                    setValue('orderFee', `NGN ${cartTotalCost}`);
                    setCartData(userCart.data.message);
                    setErrorOccurred(false);
                    setFetchingData(false);
                } else {
                    setErrorOccurred(true);
                    setFetchingData(false);
                    openNotificationWithIcon('error', 'An error occurred while fetching products from cart. Please try again');
                }
            })
            .catch(err => {
                setErrorOccurred(true);
                setFetchingData(false);
                openNotificationWithIcon('error', 'An error occurred while fetching products from cart. Please try again');
            })
    }

    useEffect(() => {
        fetchCart();
        let allStates = [];
        for (let states of Object.keys(StatesData)) {
            allStates.push(states);
        }
        setNigerianStatesData(allStates);
    }, [])

    const updateLGAList = e => {
        setValue('deliveryLGA', '');
        setDeliveryLGA('');
        setDeliveryState(e);
        let deliveryFee = e === "Lagos" ? 500 : 1000;
        e === "Lagos" ? setDeliveryFee(deliveryFee) : setDeliveryFee(deliveryFee);
        e === "Lagos" ? setValue('deliveryFee', 'NGN 500.00') : setValue('deliveryFee', 'NGN 1000.00');
        let newCartTotal = deliveryFee + +cartTotalCost;
        let taxToAdd = ((tax * cartTotalCost) / 100);
        setOrderTotalCost(+newCartTotal + +taxToAdd);
        setValue('orderFee', `NGN ${newCartTotal}`);
        setNigerianLGAData(StatesData[e]);
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;
    const secAntIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const deliveryValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        phoneNumber: yup.string().required('Please enter your phone number'),
        address: yup.string().required('Please enter your address')
    })

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(deliveryValidator)
    });

    const pickupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
        phoneNumber: yup.string().required('Please enter your phone number'),
    })

    const { handleSubmit: handlePickUpSubmit, control: controlPickUp, formState: { errors: errorsPickUp } } = useForm({
        resolver: yupResolver(pickupValidator)
    });


    const setUserDeliveryDetails = e => {
        let userFormData = {
            emailAddress: e.emailAddress,
            phoneNumber: e.phoneNumber, deliveryType,
            deliveryState, deliveryLGA: e.deliveryLGA, deliveryFee, address: e.address, orderTotalCost,
            cartData, cartTotalCost,
            orderInformation: e.orderInformation
        };
        let tempDeliveryFee = 0;
        cartData.forEach((data) => {
            let prodDelivery = data.Product[e.deliveryLGA] * data.quantity;
            tempDeliveryFee += prodDelivery;
        })
        let taxToAdd = ((tax * cartTotalCost) / 100);
        setOrderTotalCost(+tempDeliveryFee + +cartTotalCost + +taxToAdd);
        setUserFormData(userFormData);
        setDeliveryFee(tempDeliveryFee);
        if (e.deliveryLGA) {
            setFormDataToShow('deliveryDates');
        } else {
            openNotificationWithIcon('error', 'Please select local government')
        }
    }
    const setUserPickupDetails = e => {
        let userFormData = {
            emailAddress: e.emailAddress,
            phoneNumber: e.phoneNumber,
            deliveryType,
            deliveryState: 'Lagos',
            deliveryLGA: 'Surulere', deliveryFee: 0,
            address: 'The Dance Place - Conoil filling Station, Eric Moore Road, Surulere.e3', orderTotalCost,
            cartData, cartTotalCost,
            orderInformation: e.orderInformation
        };
        setDeliveryFee(0);
        let taxToAdd = ((tax * cartTotalCost) / 100);
        setOrderTotalCost(+cartTotalCost + 0 + +taxToAdd);
        setUserFormData(userFormData);
        setFormDataToShow('deliveryDates');
    }

    // setDeliveryType --------
    const setUserDeliveryType = e => {
        if (e.target.value === "pickup") {
            let userFormData = {
                emailAddress: props.auth.userDetails.emailAddress,
                phoneNumber: props.auth.userDetails.phoneNumber,
                deliveryState: 'Lagos',
                deliveryLGA: 'Surulere', deliveryFee,
                address: 'Behind Conoil filling Station, Eric Moore Rd', orderTotalCost,
                cartData, cartTotalCost,
                orderInformation: ''
            };
            setDeliveryFee(0);
            let taxToAdd = ((tax * cartTotalCost) / 100);
            setOrderTotalCost(+cartTotalCost + 0 + +taxToAdd);
            setUserFormData(userFormData);
        }
        setDeliveryType(e.target.value);
    }

    const changeDeliveryDisplay = e => {
        if (deliveryType === "pickup") {
            setFormDataToShow('pickupDetails');
        } else {
            setFormDataToShow('deliveryDetails')
        }
    }

    // Paystack
    const config = {
        reference: (new Date()).getTime().toString(),
        email: props.auth.userDetails.emailAddress,
        amount: `${+orderTotalCost}00`, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: privateKey,
    };

    // you can call this function anything
    const onSuccessPayStack = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setFetchingCheckoutData(true);
        axiosCall.post('/products/cart/checkout', {
            userFormData, transId: reference.trxref, deliveryDate,
            cartToken: localStorage.getItem('cart-token')
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(merchandiseData => {
                console.log(merchandiseData)
                if (merchandiseData.data.statusMessage === "success") {
                    localStorage.setItem('userorderitem', userFormData.deliveryType);
                    window.location.href = "/checkout-success";
                } else {
                    setFetchingCheckoutData(false);
                    openNotificationWithIcon('error', 'An error occurred while completing transaction. Please try again..');
                }
            })
            .catch(err => {
                console.log(err)
                setFetchingCheckoutData(false);
                openNotificationWithIcon('error', 'An error occurred while completing transaction. Please try again..');
            })
    };

    // you can call this function anything
    const onClosePaystack = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        openNotificationWithIcon('error', 'Transaction cancelled')
    }

    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <button
                    className="btn-accent full"
                    onClick={() => {
                        initializePayment(onSuccessPayStack, onClosePaystack)
                    }}>Go to Payment</button>
            </div>
        );
    };

    return (
        <div>
            <Nav />
            <Spin spinning={fetchingCheckoutData} indicator={secAntIcon}>
                <div className="form form_page">
                    <div className="checkout-form-cover">
                        <div>
                            <div className="form_detail contain checkout">
                                {
                                    errorMessage ?
                                        <p className="errorMessage">{errorMessage}</p> : ''
                                }
                                {
                                    fetchingData ?
                                        <div>
                                            <Spin indicator={secAntIcon} />
                                        </div>
                                        :
                                        errorOccurred ?
                                            <div className="center_align_message">
                                                <div>
                                                    <h3>Oops!</h3>
                                                    <p>An error occurred while we were trying to fetch data. Please reload page to
                                                        try again.</p>
                                                </div>
                                            </div>
                                            :
                                            formDataToShow === "shippingType" ?
                                                <div className="checkout-form">
                                                    <div className="checkout_center">
                                                        <h3 className="checkout_center_title">Enter your Order Option</h3>
                                                        <p className="checkout_center_text">Enjoy cashbacks and discounted prices on all orders</p>
                                                        <div>
                                                            <div className="last_checkout_data">
                                                                <Radio.Group
                                                                    onChange={e => setUserDeliveryType(e)}
                                                                    name="radiogroup" defaultValue={deliveryType}>
                                                                    <Radio value={'delivery'}>Delivery</Radio>
                                                                    <Radio value={'pickup'}>Pickup</Radio>
                                                                </Radio.Group>
                                                                <button
                                                                    className="btn-accent"
                                                                    onClick={() => {
                                                                        if (deliveryType) {
                                                                            changeDeliveryDisplay()
                                                                            // setFormDataToShow('deliveryDetails')
                                                                        } else {
                                                                            openNotificationWithIcon('error', 'Please select delivery type')
                                                                        }
                                                                    }}>Continue</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                formDataToShow === "pickupDetails" ?
                                                    <div className="checkout-form">
                                                        <div>
                                                            <h3>Your Pickup Details</h3>
                                                        </div>
                                                        <form onSubmit={handlePickUpSubmit(setUserPickupDetails)} className="mt-3">
                                                            <div className="form_flex">
                                                                <div className="form_group space">
                                                                    <label htmlFor="emailAddress">Email address</label>
                                                                    <Controller name="emailAddress" control={controlPickUp}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input style={{ height: '3rem' }} type="email" {...field}
                                                                                    name="emailAddress" />
                                                                            )
                                                                        }} />
                                                                    {errorsPickUp.emailAddress && <p className="errorMessage">{errorsPickUp.emailAddress.message}</p>}
                                                                </div>
                                                                <div className="form_group">
                                                                    <label htmlFor="phoneNumber">Phone number</label>
                                                                    <Controller name="phoneNumber" control={controlPickUp}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input style={{ height: '3rem' }} type="tel" {...field}
                                                                                    name="phoneNumber" />
                                                                            )
                                                                        }} />
                                                                    {errorsPickUp.phoneNumber && <p className="errorMessage">{errorsPickUp.phoneNumber.message}</p>}
                                                                </div>
                                                            </div>
                                                            <div className="form_flex">
                                                                <div className="form_group">
                                                                    <label htmlFor="deliveryState">Delivery State</label>
                                                                    <Controller name="deliveryState" control={controlPickUp}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Select style={{ height: '3rem' }}
                                                                                    defaultValue={deliveryState}
                                                                                    onChange={updateLGAList} disabled
                                                                                >
                                                                                    {/* {
                                                                            nigerianStatesData.map((states, index) => (
                                                                                <Option value={states} key={index}>{states}</Option>
                                                                            ))
                                                                        } */}
                                                                                    <Option value="Lagos">Lagos</Option>
                                                                                </Select>
                                                                            )
                                                                        }} />
                                                                    {errors.deliveryState && <p className="errorMessage">{errors.deliveryState.message}</p>}
                                                                </div>
                                                                <div className="form_group">
                                                                    <label style={{ visibility: 'hidden' }} htmlFor="deliveryLGA">Delivery State</label>
                                                                    <Controller name="deliveryLGA" control={controlPickUp}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input
                                                                                    style={{ height: '3rem' }} disabled {...field}
                                                                                    defaultValue="The Dance Place - Conoil filling Station, Eric Moore Road, Surulere.e3" />
                                                                            )
                                                                        }} />
                                                                    {errors.deliveryLGA && <p className="errorMessage">{errors.deliveryLGA.message}</p>}
                                                                </div>
                                                            </div>
                                                            <div className="form_group">
                                                                <label htmlFor="orderInformation">Order Information <small>(optional)</small></label>
                                                                <Controller name="orderInformation" control={controlPickUp}
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <Input.TextArea type="orderInformation" rows="3" {...field}
                                                                                placeholder="Please set your color, dimension and pickup adjustments"
                                                                                name="orderInformation" />
                                                                        )
                                                                    }} />
                                                            </div>
                                                            <div className="mt_5 grid_flex">
                                                                <button
                                                                    onClick={() => setFormDataToShow('shippingType')}
                                                                    className="btn_blank"><span style={{ marginRight: 10 }}><img src={ArrowLeft} alt="Arrow Left" /></span>Change Order Option</button>
                                                                {
                                                                    loadingData
                                                                        ?
                                                                        <button className="btn-accent">
                                                                            <Spin indicator={antIcon} /></button>
                                                                        :
                                                                        <button className="btn-accent">Save Pickup Details</button>
                                                                }
                                                            </div>
                                                        </form>
                                                    </div>
                                                    :
                                                    formDataToShow === "deliveryDetails" ?
                                                        <div className="checkout-form">
                                                            <div>
                                                                <h3>Enter Your Delivery Details</h3>
                                                            </div>
                                                            <form onSubmit={handleSubmit(setUserDeliveryDetails)} className="mt-3">
                                                                <div className="form_flex">
                                                                    <div className="form_group space">
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
                                                                        <label htmlFor="phoneNumber">Phone number</label>
                                                                        <Controller name="phoneNumber" control={control}
                                                                            render={({ field }) => {
                                                                                return (
                                                                                    <Input style={{ height: '3rem' }} type="tel" {...field}
                                                                                        name="phoneNumber" />
                                                                                )
                                                                            }} />
                                                                        {errors.phoneNumber && <p className="errorMessage">{errors.phoneNumber.message}</p>}
                                                                    </div>
                                                                </div>
                                                                <div className="form_flex">
                                                                    <div className="form_group">
                                                                        <label htmlFor="deliveryState">Delivery State</label>
                                                                        <Controller name="deliveryState" control={control}
                                                                            render={({ field }) => {
                                                                                return (
                                                                                    <Select style={{ height: '3rem' }}
                                                                                        defaultValue={deliveryState}
                                                                                        onChange={updateLGAList} disabled
                                                                                    >
                                                                                        {/* {
                                                                                        nigerianStatesData.map((states, index) => (
                                                                                            <Option value={states} key={index}>{states}</Option>
                                                                                        ))
                                                                                    } */}
                                                                                        <Option value="Lagos">Lagos</Option>
                                                                                    </Select>
                                                                                )
                                                                            }} />
                                                                        {errors.deliveryState && <p className="errorMessage">{errors.deliveryState.message}</p>}
                                                                    </div>
                                                                    <div className="form_group">
                                                                        <label style={{ visibility: 'hidden' }} htmlFor="deliveryLGA">Delivery State</label>
                                                                        <Controller name="deliveryLGA" control={control}
                                                                            render={({ field }) => {
                                                                                return (
                                                                                    <Select
                                                                                        style={{ height: '3rem' }}
                                                                                        defaultValue={deliveryLGA} {...field}>
                                                                                        {
                                                                                            deliveryStates.map((lga, index) => (
                                                                                                <Option value={lga} key={index}>{`${lga.slice(0, 1).toUpperCase()}${lga.slice(1)}`}</Option>
                                                                                            ))
                                                                                        }
                                                                                        {/* <Option value="others">Others</Option> */}
                                                                                    </Select>
                                                                                )
                                                                            }} />
                                                                        {errors.deliveryLGA && <p className="errorMessage">{errors.deliveryLGA.message}</p>}
                                                                    </div>
                                                                </div>
                                                                <div className="form_group">
                                                                    <label htmlFor="address">House address</label>
                                                                    <Controller name="address" control={control}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input.TextArea type="address" rows="3" {...field}
                                                                                    name="address" />
                                                                            )
                                                                        }} />
                                                                    {errors.address && <p className="errorMessage">{errors.address.message}</p>}
                                                                </div>
                                                                <div className="form_group">
                                                                    <label htmlFor="orderInformation">Order Information <small>(optional)</small></label>
                                                                    <Controller name="orderInformation" control={control}
                                                                        render={({ field }) => {
                                                                            return (
                                                                                <Input.TextArea type="orderInformation" rows="3" {...field}
                                                                                    placeholder="Please set your color, dimension and pickup adjustments"
                                                                                    name="orderInformation" />
                                                                            )
                                                                        }} />
                                                                </div>
                                                                <div className="mt_5 grid_flex">
                                                                    <button
                                                                        onClick={() => setFormDataToShow('shippingType')}
                                                                        className="btn_blank"><img src={ArrowLeft} alt="Arrow Left" /> Change Order Option</button>
                                                                    {
                                                                        loadingData
                                                                            ?
                                                                            <button className="btn-accent">
                                                                                <Spin indicator={antIcon} /></button>
                                                                            :
                                                                            <button className="btn-accent">Save Delivery Details</button>
                                                                    }
                                                                </div>
                                                            </form>
                                                        </div>
                                                        :
                                                        <div className="checkout-confirmation mt_5">
                                                            <div className="grid-2-bias">
                                                                <div>
                                                                    <div>
                                                                        <h3>Please confirm and complete your order information</h3>
                                                                    </div>
                                                                    <form onSubmit={handleSubmit(setUserDeliveryDetails)} className="mt-3">
                                                                        <div className="form_flex">
                                                                            <div className="form_group space">
                                                                                <label htmlFor="emailAddressReview">Email address</label>
                                                                                <Input style={{ height: '3rem' }} type="email" disabled
                                                                                    defaultValue={userFormData.emailAddress}
                                                                                    name="emailAddressReview" />
                                                                            </div>
                                                                            <div className="form_group">
                                                                                <label htmlFor="phoneNumberReview">Phone number</label>
                                                                                <Input style={{ height: '3rem' }} type="tel" disabled
                                                                                    defaultValue={userFormData.phoneNumber}
                                                                                    name="phoneNumberReview" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form_flex">
                                                                            <div className="form_group">
                                                                                <label htmlFor="deliveryState">Delivery State</label>
                                                                                <Input disabled style={{ height: '3rem' }} type="text"
                                                                                    defaultValue={userFormData.deliveryState}
                                                                                    name="deliveryStateReview" />
                                                                            </div>
                                                                            <div className="form_group">
                                                                                <label style={{ visibility: 'hidden' }} htmlFor="deliveryLGAReview">Delivery LGA</label>
                                                                                <Input disabled style={{ height: '3rem' }} type="text"
                                                                                    defaultValue={`${userFormData.deliveryLGA.slice(0, 1).toUpperCase()}${userFormData.deliveryLGA.slice(1)}`}
                                                                                    name="deliveryLGAReview" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form_flex">
                                                                            <div className="form_group">
                                                                                <label htmlFor="deliveryTypeReview">Delivery Type</label>
                                                                                <Input style={{ height: '3rem' }} disabled
                                                                                    defaultValue={`${deliveryType.slice(0, 1).toUpperCase()}${deliveryType.slice(1)}`}
                                                                                    name="deliveryTypeReview" />
                                                                            </div>
                                                                            <div className="form_group">
                                                                                <label htmlFor="deliveryFeeReview">Delivery Fee</label>
                                                                                <NumberFormat prefix="" value={deliveryFee.toFixed(2)} className="foo" prefix="NGN "
                                                                                    thousandSeparator={true} disabled style={{ height: '3rem' }} className="style-input" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form_group">
                                                                            <label htmlFor="address">House address</label>
                                                                            <Input.TextArea type="address" rows="3" disabled
                                                                                defaultValue={userFormData.address}
                                                                                name="address" />
                                                                        </div>
                                                                        <div className="form_group">
                                                                            <label htmlFor="orderInformation">Order Information <small>(optional)</small></label>
                                                                            <Input.TextArea disabled type="orderInformation" rows="3"
                                                                                placeholder="Please set your color, dimension and pickup adjustments"
                                                                                defaultValue={userFormData.orderInformation}
                                                                                name="orderInformation" />
                                                                        </div>
                                                                        <button
                                                                            onClick={() => setFormDataToShow('shippingType')}
                                                                            className="btn_blank"><img src={ArrowLeft} alt="Arrow Left" /> Change Order Option</button>
                                                                    </form>
                                                                </div>
                                                                <div>
                                                                    <div className="cart-brief-data">
                                                                        <ul className="first-list">
                                                                            <li>
                                                                                <span className="first">Subtotal </span>
                                                                                <span className="second"><span className="currency">NGN</span>
                                                                                    <NumberFormat prefix="" value={cartTotalCost.toFixed(2)} className="foo"
                                                                                        displayType={'text'} thousandSeparator={true} />
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="first">Delivery Fee </span>
                                                                                <span className="second"><span className="currency">NGN</span>
                                                                                    <NumberFormat prefix="" value={deliveryFee.toFixed(2)} className="foo"
                                                                                        displayType={'text'} thousandSeparator={true} />
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="first">Tax</span>
                                                                                <span className="second"><span className="currency">NGN</span>
                                                                                    <NumberFormat prefix="" value={((tax * cartTotalCost) / 100).toFixed(2)} className="foo"
                                                                                        displayType={'text'} thousandSeparator={true} /></span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="first">Less Coupon</span>
                                                                                <span className="second"><span className="currency">NGN</span> 0.00</span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="first">Less Voucher</span>
                                                                                <span className="second"><span className="currency">NGN</span> 0.00</span>
                                                                            </li>
                                                                            <Divider style={{ marginTop: 0 }} />
                                                                            <li>
                                                                                <span className="first">Total</span>
                                                                                <span className="second"><span className="currency">NGN</span>
                                                                                    <NumberFormat prefix="" value={orderTotalCost.toFixed(2)} className="foo"
                                                                                        displayType={'text'} thousandSeparator={true} />
                                                                                </span>
                                                                            </li>
                                                                            <div style={{ marginTop: 20 }}></div>
                                                                            {/* <button
                                                                            onClick={() => goToPayment()}
                                                                            className="btn-accent full">Go to Payment</button> */}
                                                                            <PaystackHookExample />
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show-on-mobile-only">
                    <Footer margin={true} />
                </div>
            </Spin>
        </div >
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(CheckOut);