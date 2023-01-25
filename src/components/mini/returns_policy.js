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
                <h1>Returns and Refund Policy</h1>
            </div>
            <div className="contact contain">
                <div className="faq_container">
                    <h4>Your Privacy Matters</h4>
                    <div style={{ marginTop: '30px' }}></div>
                    <p>
                        At VO3 Designs, customer satisfaction is our utmost priority as we offer refunds and
                        replacement of unwanted or defective products that you have previously purchased from us.
                        <br />
                        This Refund Policy (the "Policy") informs the customer about their right to return and receive
                        a refund for products purchased on our website or via any of our engagement channels as well
                        as describes the procedure, rules and guidelines relating to the return and refund for the
                        products purchased. Please read this Policy carefully to understand your rights and also
                        understand the requirements for the return and refund.

                        <br />
                        We offer returns, refunds and repairs of damaged products according to the provisions of the
                        law. If the product you purchased from us is damaged, or does not function properly, you may
                        be entitled to a refund or repairs. We also offer refunds for services purchased according
                        to the terms and conditions of this Policy
                    </p>
                    <h5>REFUNDS</h5>
                    <p>We may offer refund for products purchased if:</p>
                    <ul>
                        <li>The item(s) delivered do not match the color, specification or dimension as indicated
                            on the website or as communicated by our customer support agents</li>
                        <li>The Delivery timeline exceeds agreed timeline on invoice</li>
                        <li>The item(s) are damaged upon delivery</li>
                    </ul>
                    <h5>Customers may be eligible for a refund provided that:</h5>
                    <ul>
                        <li>The product(s) must not be damaged or broken at the time of return.</li>
                        <li>The product(s) will be returned with the receipt issued for its purchase.</li>
                    </ul>
                    <h5>EXCEPTIONS</h5>
                    <p>Notwithstanding other provisions of this Policy, we may refuse to grant returns or refunds if:</p>
                    <ul>
                        <li>The customer misuses or mishandles the product in such a way that caused
                            damage to the product.</li>
                        <li>The customer was aware or notified of the problems with the product or service
                            before making the purchase.</li>
                        <li>The customer changes their mind after payment has been made.</li>
                        <li>The customer does not check the specifications and dimensions as stated on the website
                            or as communicated by our customer support agents.</li>
                        <li>The customer does not like the product or realized they had no use of it.</li>
                        <li>The customer has received the item(s) but fails to make a report within 48 hours of receipt.</li>
                    </ul>
                    <p>We also offer refund for the services purchased in any of the following circumstances:</p>
                    <ul>
                        <li> If the service has not been performed.</li>
                        <li>If the service performed was different from the one ordered or requested.</li>
                    </ul>
                    <h5>Other conditions of returns and/or refunds are as follows:</h5>
                    <ul>
                        <li>If excluding the above stated conditions, the customer insists on a refund, 40% of
                            the total amount paid shall be withheld by the company</li>
                    </ul>
                    <h5>REFUND TIMELINE</h5>
                    <p>
                        All claims for a refund must be made within 48 hours of receipt of the product(s) or
                        after 48 hours without receiving the service(s).
                    </p>
                    <p>
                        All refunds are processed within 7-10 working days after a refund form has been filled and submitted online.
                    </p>
                    <p>
                        NOTE: <i>We reserve the right to reject the return and refuse to grant a refund if
                            the conditions stipulated herein have not been satisfied.</i>
                    </p>
                    <h5>DAMAGED PRODUCTS</h5>
                    <p>
                        If a customer discovers that the product purchased from the company is damaged upon
                        delivery, here’s how to address that:
                    </p>
                    <p>
                        Report the damage to the company via email (hello @vo3designs.com) within 48 hours upon discovery (with the
                        subject “DAMAGED ITEM”).
                        If the damage is fixable on site, our team would reach out to the customer to discuss the specifics of how
                        the damage will be resolved.
                        If the damage is beyond repair, the customer may request for a replacement or a refund.
                        The customer ensures that the damaged product is in the same condition as it was when it was received.
                    </p>
                    <p>
                        <i>
                            Please note that resolution time may vary from 5 - 10 working days within Lagos
                            State, and 10 - 15 working days outside Lagos State.
                        </i>
                    </p>
                    <h5>RETURN SHIPPING</h5>
                    <p>
                        We will bear all shipping costs or other costs associated with the return of the products.
                        If the product is being returned for repairs, we will also bear the shipping costs and
                        organize for the shipping, transportation, and collection of the product.
                        If after making arrangements for the transportation, shipping and inspection of the
                        product, it is discovered that the customer is not entitled to a refund, repair or
                        replacement, the customer shall reimburse the company of all costs incurred for the
                        inspection, transportation and postage of the returned products.
                    </p>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Contact;