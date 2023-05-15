import 'antd/dist/antd.css';
import './assets/index.css';

import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import AppRoute from './utils/routes';
import ProtectedRoutes from "./utils/protectedRoutes";
import AuthProtectedRoutes from "./utils/AuthProtectedRoute";

import Homepage from './components/homepage/index';
// import Homepage from './components/homepage/cover';

import ProductDetail from './components/shop/product_detail';
import Checkout from './components/shop/checkout';
import About from './components/mini/about';
import Portfolio from './components/mini/portfolio';
import Contact from './components/mini/contact';
import Privacy from './components/mini/privacy';
import ReturnsPolicy from './components/mini/returns_policy';
import FAQs from './components/mini/faqs';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import ResetSendMail from "./components/auth/sendmail";
import MailSent from "./components/auth/mailsent";
import ResetPassword from './components/auth/resetpassword';
import Passwordreset from './components/auth/passwordreset';
import Blog from './components/mini/blog';
import Terms from './components/mini/terms';

import Dashboard from './components/profile/dashboard';
import DeliveryDetails from './components/profile/deliverydetails';
import TransactionHistory from './components/profile/orders';
import SavedItems from './components/profile/saved';
import SignOut from './components/profile/signout';
import BlogTopic1 from './components/mini/blog/designing';
import BlogTopic2 from './components/mini/blog/wooden';
import SingleProduct from './components/shop/product';
import SearchProduct from './components/shop/search';
import AllProducts from './components/shop/allproducts';
import AllCollections from './components/shop/collections';
import CheckoutSuccess from './components/shop/checkout-success';

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const App = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path={AppRoute.product} element={<SingleProduct />} />
                    <Route path={AppRoute.search_product_name} element={<SearchProduct />} />
                    <Route path={AppRoute.all_products} element={<AllProducts />} />
                    <Route path={AppRoute.collections} element={<AllCollections />} />
                    <Route path={AppRoute.product_detail} element={<ProductDetail />} />
                    <Route path={AppRoute.checkout} element={<ProtectedRoutes><Checkout /></ProtectedRoutes>} />
                    <Route path={AppRoute.checkout_success} element={<ProtectedRoutes><CheckoutSuccess /></ProtectedRoutes>} />
                    <Route path={AppRoute.story} element={<About />} />
                    <Route path={AppRoute.contact_us} element={<Contact />} />
                    <Route path={AppRoute.privacy_policy} element={<Privacy />} />
                    <Route path={AppRoute.returns_policy} element={<ReturnsPolicy />} />
                    <Route path={AppRoute.faqs} element={<FAQs />} />
                    <Route path={AppRoute.terms} element={<Terms />} />

                    <Route path={AppRoute.portfolio} element={<Portfolio />} />
                    <Route path={AppRoute.blog} element={<Blog />} />
                    <Route path="/blogspot/designing-your-outdoor-space" element={<BlogTopic1 />} />
                    <Route path="/blogspot/5-ways-to-use-or-repurpose-wooden-crates" element={<BlogTopic2 />} />

                    {/* auth */}
                    <Route path={AppRoute.signin} element={<AuthProtectedRoutes><SignIn /></AuthProtectedRoutes>} />
                    <Route path={AppRoute.signup} element={<AuthProtectedRoutes><SignUp /></AuthProtectedRoutes>} />
                    <Route path={AppRoute.signout} element={<ProtectedRoutes><SignOut /></ProtectedRoutes>} />
                    <Route path={AppRoute.reset_send_mail} element={<AuthProtectedRoutes><ResetSendMail /></AuthProtectedRoutes>} />
                    <Route path={AppRoute.mail_sent} element={<AuthProtectedRoutes><MailSent /></AuthProtectedRoutes>} />
                    <Route path={AppRoute.reset_password} element={<AuthProtectedRoutes><ResetPassword /></AuthProtectedRoutes>} />
                    <Route path={AppRoute.password_reset} element={<AuthProtectedRoutes><Passwordreset /></AuthProtectedRoutes>} />

                    {/* profile */}
                    <Route path={AppRoute.profile_dashboard} exact element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
                    <Route path={AppRoute.profile_delivery_details} exact element={<ProtectedRoutes><DeliveryDetails /></ProtectedRoutes>} />
                    <Route path={AppRoute.profile_orders} exact element={<ProtectedRoutes><TransactionHistory /></ProtectedRoutes>} />
                    <Route path={AppRoute.profile_saved_items} exact element={<ProtectedRoutes><SavedItems /></ProtectedRoutes>} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    )
};

export default App;