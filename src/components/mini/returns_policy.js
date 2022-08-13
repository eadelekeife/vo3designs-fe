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
                <h1>Returns Policy</h1>
            </div>
            <div className="contact contain">
                <div className="faq_container">
                    <h4>Your Privacy Matters</h4>
                    <div style={{ marginTop: '30px' }}></div>
                    <p>
                        This Privacy Policy describes your privacy rights regarding how and when we collect, use, store, share and
                        protect your information across our website, APIs, applications, email notifications and tools
                        regardless of how you use or access them.
                        <br />
                        Notwithstanding which country you live in, when using any of our services, you consent to the collection,
                        transfer, storage, disclosure, and use of your information in Nigeria and any other country we operate
                        as described in this privacy policy. This includes any information you choose to provide that is deemed
                        sensitive under applicable law.
                        <br /><br />
                        We respect the privacy of our online visitors and registered users, and we will take reasonable steps to
                        protect your information.
                        <br /> <br />
                        It is our policy to respect your privacy regarding any information we may collect while operating our website.
                        <br /> <br />
                        Accordingly, we have developed this privacy policy for you to understand how we collect, use, communicate,
                        disclose, and otherwise make use of personal information. We have outlined our privacy policy below. What
                        We Do to Information Collected
                    </p>
                    <h5>Personal Information</h5>
                    <p>
                        Upon registration, we collect personal information which you voluntarily provided by lawful means. We collect
                        and use personal information solely for fulfilling the purposes specified by us and for other ancillary
                        purposes.
                        <br /><br />
                        This refers to the personal information you submit when you register (e.g., email address, company name,
                        password, bank account number, etc.) it may also include anonymous information that is linked to you, for
                        example, your IP Address. It should be relevant to the purposes for which it is to be used, and, to the extent
                        necessary for those purposes, should be accurate, complete, and up to date.
                        <br /> <br />
                        The following lists what we use your personal information for. These may be updated from time to time. To
                        provide you with access to our service.
                    </p>
                    <ul>
                        <li>To verify the information provided.</li>
                        <li>To prevent, detect and manage any illegal and fraudulent activity.</li>
                        <li>To improve our services to you.</li>
                        <li>To address any inappropriate use of our services.</li>
                        <li>To update our website layout, database, and content.</li>
                        <li>To target advertisements, newsletter, and service updates.</li>
                        <li>Resolve disputes that may occur.</li>
                    </ul>
                    <p>
                        Additional personal information may be gotten from third party applications and other
                        identification/verification services. For example, from your financial institution.
                        <br /> <br />
                        Once you begin to use our services, we keep all records of your transactions and we will not share or disclose
                        your personal information with a third party without your consent.
                    </p>
                    <h5>Protecting Your Information</h5>
                    <p>
                        We will protect your personal information by using global security safeguards against loss or theft, as well as
                        against any unauthorized access, risk of loss, disclosure, copying, misuse, or modification. Other security
                        measures include but not limited to, firewall, data encryption and granting access only to employees to fulfil
                        their job responsibilities.
                        <br />
                        We are committed to conducting our business in accordance with these principles to ensure that the
                        confidentiality of personal information is protected and maintained.
                    </p>
                    <h5>Data Storage</h5>
                    <p>
                        We will only retain personal information on our servers for as long as an account is active. Once an account has
                        been deactivated, your information is stored on our servers for as long as necessarily obligated by law. This
                        policy may change from time to time at our sole discretion.
                    </p>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Contact;