// import "./mini.css";

import React from 'react';

import { Link } from 'react-router-dom';
import { Input, Collapse } from 'antd';

import ToreraSize from "../../assets/images/content/torera-size.jpg";

import Nav from '../../utils/nav';
import Footer from '../../utils/footer';

const Contact = () => {
    const { Panel } = Collapse;
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
        <div>
            <Nav />
            <div className="contact_bg">
                <h1>Frequently asked questions</h1>
            </div>
            <div className="contact contain">
                <div className="faq_container faq-list">
                    <div className="faq-box">
                        <h5>Product and Stock</h5>
                        <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                            <Panel header="What is the size of the TORERA table? " key="1">
                                <p>
                                    <img src={ToreraSize} alt="torera dimension" />
                                </p>
                            </Panel>
                            <Panel header="Can I get the table in a custom size?" key="2">
                                <p>Yes, you can. However, the price and delivery timeline would have to
                                    change as well.</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="faq-box">
                        <h5>Payment, Returns and Refunds</h5>
                        <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                            <Panel header="How can I pay for the TORERA table?" key="1">
                                <p>You can order the table via:
                                    <ol>
                                        <li>
                                            To pay with card- kindly click the link below <br />
                                            https://paystack.com/buy/torera-foldale-table-aybzff
                                        </li>
                                        <li>
                                            Pay into our account. GT Bank 0130001071. Vo3designs <br />
                                            Send payment confirmation to us via DM and also send delivery location so
                                            delivery cost can be communicated.
                                        </li>
                                        <li>
                                            share the following <br />
                                            Name, Email address, Phone number
                                        </li>
                                    </ol>
                                </p>
                            </Panel>
                            <Panel header="Can I get a refund after payment?" key="2">
                                <p>Please refer to the ‘Returns and Refund policy’ to know if you are eligible
                                    for a refund.</p>
                            </Panel>
                            <Panel header="Can I exchange this product instead of a refund?" key="3">
                                <p>Please refer to the ‘Returns and Refund policy’ to know if you are eligible
                                    for an exchange.</p>
                            </Panel>
                            <Panel header="Can I order online and pick-up in person?" key="4">
                                <p>Yes, you can. Please specify while making your order that you would like to
                                    pick up the item yourself, and have your order details available for
                                    verification upon pick-up.</p>
                            </Panel>
                            <Panel header="Can I pay in two installments?" key="5">
                                <p>Yes, you can. However, you would only be able to get your item upon
                                    payment of the second installment.</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="faq-box">
                        <h5>Delivery</h5>
                        <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                            <Panel header="What is the delivery timeline?" key="1">
                                <p>All deliveries are made between 5-8 working days within Lagos, Nigeria.</p>
                            </Panel>
                            <Panel header="Do you deliver the TORERA table outside of Lagos?" key="2">
                                <p>Delivery outside Lagos is subject to the delivery location. Please contact us
                                    at hello@vo3designs.com to find out if we can deliver our products to you
                                    outside Lagos.</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className="faq-box">
                        <h5>Support</h5>
                        <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                            <Panel header="Whom can I contact to make enquries?" key="1">
                                <p>Please contact us via:</p>
                                <ul>
                                    <li>Email: hello@vo3designs.com</li>
                                    <li>Call: +2348034652105</li>
                                    <li>Instagram: @vo3designs</li>
                                </ul>
                            </Panel>
                            <Panel header="Whom can I contact to make enquries?" key="1">
                                <p>How do I set up the table?</p>
                                <ul>
                                    <li>Step 1: Unwrap the folded table.</li>
                                    <li>Step 2: Raise the folded table such that the legs are upright.</li>
                                    <li>Step 3: Unfold the folded legs to be at right angles to the rear legs.</li>
                                    <li>Step 4: Flip over the table top to sit on the legs, making sure it sits within the studs.</li>
                                    <li>Step 5: Place the cup in the hole on the table top</li>
                                </ul>
                            </Panel>
                            <Panel header="What is the warranty of the TORERA table?" key="2">
                                <p>The warranty of the TORERA table is six(6) months.</p>
                            </Panel>
                            <Panel header="What do I do if my order is damaged?" key="2">
                                <p>Please refer to the ‘Returns and Refund policy’ to know what to do if this occurs.</p>
                            </Panel>

                        </Collapse>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Contact;