import './style.css';

import React from "react";

import { Controller, useForm } from 'react-hook-form';
import { Divider, Input, Rate, Collapse } from 'antd';

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

import mock from '../../assets/images/shop/mock.webp';
import mock3 from '../../assets/images/shop/mock3.webp';

import products1 from '../../assets/images/content/products1.webp';
import products2 from '../../assets/images/content/products2.webp';
import products3 from '../../assets/images/content/products3.webp';
import products4 from '../../assets/images/content/products4.webp';
import products5 from '../../assets/images/content/products5.webp';
import products6 from '../../assets/images/content/products6.webp';
import products7 from '../../assets/images/content/products7.webp';


const Shop = () => {
    const { handleSubmit, control } = useForm({});
    const { Panel } = Collapse;
    const text = `The middle child of our lineup of L sectionals is hardly one to be ignored. It’s
                                    well-rounded and perfect for medium-sized living rooms.`
    return (
        <div>
            <Nav border={true} />
            <div className="contain single_product_detail">
                <div className="grid_2">
                    <div className="product_detail_image"
                    >
                        <img src={products1} className="product_detail_main" alt="product 1" />
                        <div className="">
                            <img src={products1} className="product_detail_main" alt="product 1" />
                            <img src={products1} className="product_detail_main" alt="product 1" />
                            <img src={products1} className="product_detail_main" alt="product 1" />
                        </div>
                    </div>
                    <div className="product_detail_info">
                        <div className="grid_flex">
                            <div>
                                <h2>hassan</h2>
                                <p className="amount"><span className="currency">NGN</span> 99,999.00</p>
                            </div>
                            <div>
                                <div className="gray_border">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                        <p className="product_detail">
                            The middle child of our lineup of L sectionals is hardly one to be ignored. It’s
                            well-rounded and perfect for medium-sized living rooms. It’s flexible and can accommodate
                            numerous arrangements. In fact, we think it’s less middle child and more Goldilocks: darn
                            near perfect for the whole family.
                        </p>
                        <div className="inline_block">
                            <p>Color:</p>
                            <div className="inline_display">
                                <div>
                                    <div className="color_bar" style={{ background: '#E1E0E5' }}>

                                    </div>
                                    <div className="color_bar" style={{ background: '#E9672B' }}>

                                    </div>
                                    <div className="color_bar" style={{ background: '#000' }}>

                                    </div>
                                    <div className="color_bar" style={{ background: '#FADB14' }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline_block mt_3">
                            <p>Size:</p>
                            <div className="inline_display">
                                <div>
                                    <div className="dimension_box">6 x 6ft</div>
                                    <div className="dimension_box">3 x 8ft</div>
                                    <div className="dimension_box">2 x 7ft</div>
                                    <div className="dimension_box">1 x 9ft</div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <Collapse defaultActiveKey={['1']} expandIconPosition="right" accordion>
                                <Panel header="This is panel header 1" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </div>
                        <div style={{ display: 'block', marginTop: '5%' }}></div>
                        <button className="btn-accent full_width">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="portfolio_products products contain mt_3">
                    <div>
                        <h3>Other products to checkout</h3>
                    </div>
                    <div className="portfolio_products_grid">
                        <div>
                            <img src={products1} alt="extra_1" />
                            <h4 className="furniture_name">Carta Coffee Table</h4>
                            <p className="furniture_amount">NGN 15,000.00</p>
                        </div>
                        <div>
                            <img src={products6} alt="extra_1" />
                            <h4 className="furniture_name">Carta Coffee Table</h4>
                            <p className="furniture_amount">NGN 15,000.00</p>
                        </div>
                        <div>
                            <img src={products3} alt="extra_1" />
                            <h4 className="furniture_name">Carta Coffee Table</h4>
                            <p className="furniture_amount">NGN 15,000.00</p>
                        </div>
                        <div>
                            <img src={products4} alt="extra_1" />
                            <h4 className="furniture_name">Carta Coffee Table</h4>
                            <p className="furniture_amount">NGN 15,000.00</p>
                        </div>
                        <div>
                            <img src={products4} alt="extra_1" />
                            <h4 className="furniture_name">Carta Coffee Table</h4>
                            <p className="furniture_amount">NGN 15,000.00</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial_section mt_3">
                    <div className="contain">
                        <h3>Our Reviews</h3>
                        <Divider style={{ marginTop: 2 }} />
                        <div className="grid_2">
                            <div>
                                <div className="testimonial">
                                    <div className="testimonial_header">
                                        <div>
                                            <h3>Susan Adejare</h3>
                                            <p>01/28/2021</p>
                                        </div>
                                        <div>
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                    </div>
                                    <div className="testimonial_content">
                                        <p>
                                            We finally took the plunge and got a sectional. It is perfect for our rather large
                                            “unusual” shaped living room. Love that it comes in pieces. There were 10 boxes. Took
                                            about 2 hours to assemble. Instructions and videos were very good. Very happy with our
                                            purchase.
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                                <div className="testimonial">
                                    <div className="testimonial_header">
                                        <div>
                                            <h3>Susan Adejare</h3>
                                            <p>01/28/2021</p>
                                        </div>
                                        <div>
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                    </div>
                                    <div className="testimonial_content">
                                        <p>
                                            We finally took the plunge and got a sectional. It is perfect for our rather large
                                            “unusual” shaped living room. Love that it comes in pieces. There were 10 boxes. Took
                                            about 2 hours to assemble. Instructions and videos were very good. Very happy with our
                                            purchase.
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                                <div className="testimonial">
                                    <div className="testimonial_header">
                                        <div>
                                            <h3>Susan Adejare</h3>
                                            <p>01/28/2021</p>
                                        </div>
                                        <div>
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                    </div>
                                    <div className="testimonial_content">
                                        <p>
                                            We finally took the plunge and got a sectional. It is perfect for our rather large
                                            “unusual” shaped living room. Love that it comes in pieces. There were 10 boxes. Took
                                            about 2 hours to assemble. Instructions and videos were very good. Very happy with our
                                            purchase.
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                            <div>
                                <div className="new_rating">
                                    <div>
                                        {/* <h4>Add new rating</h4> */}
                                    </div>
                                    <div className="form_group">
                                        <label>Rating</label>
                                        <Controller name="firstName" control={control} defaultValue=""
                                            render={({ field }) => {
                                                return (
                                                    <div>
                                                        <Rate allowHalf defaultValue={2.5} />
                                                    </div>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form_group">
                                        <label>Full name</label>
                                        <Controller name="firstName" control={control} defaultValue=""
                                            render={({ field }) => {
                                                return (
                                                    <Input {...field} style={{ height: '3rem' }} />
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form_group">
                                        <label>Email address</label>
                                        <Controller name="firstName" control={control} defaultValue=""
                                            render={({ field }) => {
                                                return (
                                                    <Input {...field} style={{ height: '3rem' }} />
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form_group">
                                        <label>Message</label>
                                        <Controller name="firstName" control={control} defaultValue=""
                                            render={({ field }) => {
                                                return (
                                                    <Input.TextArea {...field} style={{ height: '6rem' }} />
                                                )
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: 'block', marginTop: '5%' }}>

                                    </div>
                                    <button className="btn-accent">Add Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Shop;