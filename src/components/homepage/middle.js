import './homepage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react';

import { Rate, Modal, notification, Input, Spin, Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Controller, useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import axiosCall from '../../utils/axiosCall';

import HeroVideo from '../../assets/videos/hero.mp4';

import Showcase1 from '../../assets/images/new/dining.jpg';
import Showcase2 from '../../assets/images/new/chair.jpg';
import Showcase3 from '../../assets/images/new/bed.jpg';
import Showcase4 from '../../assets/images/new/stool.jpg';

import Mail from '../../assets/images/icons/mail.svg';

import showcase7 from '../../assets/images/new/table.jpg';
import showcase8 from '../../assets/images/new/console.jpg';
import showcase9 from '../../assets/images/new/sunbeds.jpg';
import showcase10 from '../../assets/images/new/benches.jpg';

import Icons from '../../assets/images/icons.png';
import IconToLeft from '../../assets/images/icons/arrow-left-circle.svg';
import IconToRight from '../../assets/images/icons/arrow-right-circle.svg';

import packager from '../../assets/images/homepage/delivery.png';
import lorry from '../../assets/images/homepage/furnitures.png';
import tree from '../../assets/images/homepage/chair.png';
import { Link } from 'react-router-dom';


const Homepage = () => {
    let token = "IGQVJWbFFlVkZARMUxQc1BqZAWxoeVQwM0M2NEhKQmtmOHZADaDZA2OTRJM2JHZAmg2SVhrNUgyQ3VaOVBCZA1ByRG1kc0VIYVd1djFRLXNfTWNaeWFoeTVxUUZAJRmsyTXhuSTBBNDMxbFFHdkYzd3NfRVJhbwZDZD";
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchingProducts, setFetchingProducts] = useState(true);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [category] = useState(['Seating', 'Tables', 'Chairs', 'Benches', 'Consoles', 'Beds', 'Bars', 'Sunbeds', 'Swings'])
    const [randomValue] = useState(Math.trunc(Math.random() * 8) + 1);
    const [showFirst, setShowFirst] = useState('first');

    const antIcon = (<LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />);
    const [errorMessage, setErrorMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description:
                message,
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const validator = yup.object().shape({
        emailAddress: yup.string().email('Email is not valid').required('Email field can not be empty'),
    })
    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validator)
    });
    useEffect(() => {
        setTimeout(() => {
            setIsModalVisible(true)
        }, 12000)
    }, [])

    useEffect(() => {
        axiosCall(`/products/trending`)
            .then(data => {
                if (data.data.statusMessage === "success") {
                    setFetchingProducts(false);
                    setTrendingProducts(data.data.message);
                } else {
                    openNotificationWithIcon('error', data.data.summary);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', 'An error occurred while loading data. Please reload page to try again')
            })
    }, [])

    let skeleton = [];
    for (let i = 0; i < 6; i++) {
        skeleton.push(<Skeleton active />)
    }
    const pageSize = 24;

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        ]
    }

    const subscribeButton = e => {
        setSendingMessage(true);
        axiosCall.post('/users/subscribe', {
            emailAddress: e.emailAddress
        })
            .then(data => {
                if (data.data.statusMessage === "success") {
                    openNotificationWithIcon('success', `Thanks for Subscribing!`);
                    setValue('emailAddress', '');
                    setIsModalVisible(false);
                    setSendingMessage(false);
                } else {
                    openNotificationWithIcon('error', `An error occurred while saving data. Please try again`);
                    setSendingMessage(false);
                }
            })
            .catch(err => {
                openNotificationWithIcon('error', `An error occurred while saving data. Please try again`);
                setSendingMessage(false);
            })
    }

    return (
        <div className="homepage-display">
            <Nav />
            <div className="header">
                <div>
                    <h3>Vo3 Designs</h3>
                    <p>Extending your indoors - outdoors</p>
                    <Link to={`/products/${category[randomValue]}`}>Shop {category[randomValue]}</Link>
                </div>
            </div>
            <div>
                <div className="header_product_list mt_5">
                    <div className="contain">
                        <div className="main_top">
                            <h3
                                style={{ textAlign: 'center' }}
                                className="check-header">Bespoke Designs, Sustainable Furniture</h3>
                            <div className="desktop">
                                <div className="grid_4">
                                    <div>
                                        <Link to="/products/Dining">
                                            <img src={Showcase1} alt="showcase1" />
                                            <h4>Dining</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Beds">
                                            <img src={Showcase3} alt="showcase1" />
                                            <h4>Beds</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Chairs">
                                            <img src={Showcase2} alt="showcase1" />
                                            <h4>Chairs</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Stools">
                                            <img src={Showcase4} alt="showcase1" />
                                            <h4>Stools</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Tables">
                                            <img src={showcase7} alt="showcase1" />
                                            <h4>Tables</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Consoles">
                                            <img src={showcase8} alt="showcase1" />
                                            <h4>Consoles</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Sunbeds">
                                            <img src={showcase9} alt="showcase1" />
                                            <h4>Sunbeds</h4>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/products/Benches">
                                            <img src={showcase10} alt="showcase1" />
                                            <h4>Benches</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile">
                                {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <div onClick={() => setShowFirst('first')}>
                                        <img src={IconToLeft} alt="IconToRight" />
                                    </div>
                                    <div onClick={() => setShowFirst('second')}>
                                        <img src={IconToRight} alt="IconToRight" />
                                    </div>
                                </div> */}
                                {
                                    showFirst === "first" ?
                                        <div>
                                            <div className="grid_4">
                                                <div>
                                                    <Link to="/products/Tables">
                                                        <img src={showcase7} alt="showcase1" />
                                                        <h4>Tables</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Consoles">
                                                        <img src={showcase8} alt="showcase1" />
                                                        <h4>Consoles</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Sunbeds">
                                                        <img src={showcase9} alt="showcase1" />
                                                        <h4>Sunbeds</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Benches">
                                                        <img src={showcase10} alt="showcase1" />
                                                        <h4>Benches</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="grid_4">
                                                <div>
                                                    <Link to="/products/Dining">
                                                        <img src={Showcase1} alt="showcase1" />
                                                        <h4>Dining</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Beds">
                                                        <img src={Showcase3} alt="showcase1" />
                                                        <h4>Beds</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Chairs">
                                                        <img src={Showcase2} alt="showcase1" />
                                                        <h4>Chairs</h4>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/products/Stools">
                                                        <img src={Showcase4} alt="showcase1" />
                                                        <h4>Stools</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                }
                                {/* <div className=""
                                    style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                                    <button className="btn-accent">See all collections</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="playground mt_5">
                    <div>
                        <h3>Vo3 Playground Collections</h3>
                        <button className="btn-accent">Check out our pieces</button>
                    </div>
                </div> */}

                <div className="story_props mt_5">
                    <div className="grid_2">
                        <div>
                            <div className="contain">
                                <h3>Explore each unique collection</h3>
                                <div className="grid_2">
                                    <div>
                                        <div className="">
                                            <img src={lorry} alt="tree" />
                                            <div>
                                                <h4>Uniquely designed items</h4>
                                                <p>Each Vo3 item is remarkably   designed and manufactured at the highest production standards</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="">
                                            <img src={lorry} alt="tree" />
                                            <div>
                                                <h4>Space-saving solutions</h4>
                                                <p>Our items are intentionally created to maximise and make the best use of our users' spaces</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="">
                                            <img src={packager} alt="tree" />
                                            <div>
                                                <h4>Bespoke design services</h4>
                                                <p>Haven't seen exactly what you're looking for? Feel free to contact us for your custom furniture and design needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deskto">
                                        <div className="">
                                            <img src={tree} alt="tree" />
                                            <div>
                                                <h4>Sustainable Furniture</h4>
                                                <p>Every Vo3 product is manufactured keeping eco-friendliness in mind</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video_banner">
                            <video loop playsinline="" autoPlay muted preload="auto">
                                {/* "https://media.graphassets.com/okjMYiS3eRh9cULy7cDg" */}
                                <source type="video/mp4" src={HeroVideo} />

                            </video>
                        </div>
                    </div>
                </div>
                <div className="header_product_list mt_5 testimonial-cover">
                    <div className="contain">
                        <div className="main_top">
                            <h3
                                style={{ textAlign: 'center' }}
                                className="check-header">Reviews from people like you</h3>
                            <div className="grid_4">
                                <div className="testimonial-box">
                                    <div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <img src={Icons} alt="Icons" />
                                        </div>
                                        <p>
                                            Thank you!!! I loveee the Olufemi Rocking Chair. It's gorgeous.
                                        </p>
                                    </div>
                                    <div className="testimonial-box-inside">
                                        <h4>Satisfied Customer</h4>
                                        <Rate disabled defaultValue={5} style={{ color: '#fff' }} />
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <img src={Icons} alt="Icons" />
                                        </div>
                                        <p>
                                            I absolutely love my Pergola. It has completely transformed my backyard.
                                        </p>
                                    </div>
                                    <div className="testimonial-box-inside">
                                        <h4>Satisfied Customer</h4>
                                        <Rate disabled defaultValue={5} style={{ color: '#fff' }} />
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <img src={Icons} alt="Icons" />
                                        </div>
                                        <p>
                                            I'm really big on making the best use of my space and the Torera table
                                            is the perfect fit for me.
                                        </p>
                                    </div>
                                    <div className="testimonial-box-inside">
                                        <h4>Satisfied Customer</h4>
                                        <Rate disabled defaultValue={5} style={{ color: '#fff' }} />
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <img src={Icons} alt="Icons" />
                                        </div>
                                        <p>
                                            I absolutely love my Pergola. It has completely transformed my backyard.
                                        </p>
                                    </div>
                                    <div className="testimonial-box-inside">
                                        <h4>Satisfied Customer</h4>
                                        <Rate disabled defaultValue={5} style={{ color: '#fff' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story_props mt_5">
                    <div className="grid_2">
                        <div>
                            <div className="contain">
                                <h3>Explore each unique collection</h3>
                                <div className="grid_2">
                                    <div>
                                        <div className="">
                                            <img src={lorry} alt="tree" />
                                            <div>
                                                <h4>Uniquely designed items</h4>
                                                <p>Each Vo3 item is remarkably   designed and manufactured at the highest production standards</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="">
                                            <img src={lorry} alt="tree" />
                                            <div>
                                                <h4>Space-saving solutions</h4>
                                                <p>Our items are intentionally created to maximise and make the best use of our users' spaces</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="">
                                            <img src={packager} alt="tree" />
                                            <div>
                                                <h4>Bespoke design services</h4>
                                                <p>Haven't seen exactly what you're looking for? Feel free to contact us for your custom furniture and design needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deskto">
                                        <div className="">
                                            <img src={tree} alt="tree" />
                                            <div>
                                                <h4>Sustainable Furniture</h4>
                                                <p>Every Vo3 product is manufactured keeping eco-friendliness in mind</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video_banner">
                            <video loop playsinline="" autoPlay muted preload="auto">
                                {/* "https://media.graphassets.com/okjMYiS3eRh9cULy7cDg" */}
                                <source type="video/mp4" src={HeroVideo} />

                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal
                footer={null}
                title={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="notifs_modal">
                    <div className="grid_">
                        <div>
                            <div className="notifs_data">
                                <img src={Mail} alt="subscribe to our newsletter" />
                                <h3>Like deals, discounts and updates on our Furniture?</h3>
                                <p>Join our VO3 tribe and we’d send them your way</p>
                                <div>
                                    <form onSubmit={handleSubmit(subscribeButton)}>
                                        <div className="form_group">
                                            {/* <label>Password</label> */}
                                            <Controller name="emailAddress" control={control}
                                                render={({ field }) => (
                                                    <Input placeholder="example.gmail.com"
                                                        style={{ height: '3rem' }} type="email"
                                                        {...field} name="emailAddress" />
                                                )} />
                                            {
                                                !sendingMessage
                                                    ?
                                                    <button id="submit-form" type="submit">Subscribe</button>
                                                    :
                                                    <button id="submit-form" disabled={true} type="submit">
                                                        <Spin indicator={antIcon} /></button>
                                            }
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <p className="unimportant">
                                        Your privacy is important to us, so we'll never spam you or share your info with
                                        third parties. Take a look at our privacy policy. You can also unsubscribe at any time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <img src={_1} alt="_1" />
                        </div> */}
                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default Homepage;