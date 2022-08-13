import 'antd/dist/antd.css';
import './assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoute from './utils/routes';

import TopNav from './utils/top';
import Nav from './utils/nav';

import Homepage from './components/homepage/index';

import Shop from './components/shop/index';
import Sofa from './components/shop/sofa';
import About from './components/mini/about';
import Portfolio from './components/mini/portfolio';
import Contact from './components/mini/contact';
import Privacy from './components/mini/privacy';
import ReturnsPolicy from './components/mini/returns_policy';
import FAQs from './components/mini/faqs';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

import Dashboard from './components/profile/dashboard';

const App = () => {
    return (
        <BrowserRouter>
            {/* <TopNav /> */}
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sofa" element={<Sofa />} />
                <Route path="/about" element={<About />} />
                <Route path={AppRoute.contact_us} element={<Contact />} />
                <Route path={AppRoute.privacy_policy} element={<Privacy />} />
                <Route path={AppRoute.returns_policy} element={<ReturnsPolicy />} />
                <Route path={AppRoute.faqs} element={<FAQs />} />

                <Route path="/portfolio" element={<Portfolio />} />

                {/* auth */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                {/* profile */}
                <Route path={AppRoute.profile_dashboard} exact element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);