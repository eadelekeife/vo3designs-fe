import '../style.css';

import React from 'react';

import { Divider } from 'antd';
import Nav from '../../../utils/sec-nav';
import Footer from '../../../utils/footer';

import BlogPhoto1 from '../../../assets/images/blog/blogphoto13.jpeg';
import BlogPhoto2 from '../../../assets/images/blog/blogphoto11.jpeg';
import BlogPhoto3 from '../../../assets/images/blog/blogphoto14.jpeg';
import BlogPhoto4 from '../../../assets/images/blog/blogphoto4.jpg';
import Process1 from '../../../assets/images/blog/picture1.jpg';

import AppRoutes from '../../../utils/routes';
import { Link } from 'react-router-dom';


const BlogTopic1 = () => {
    return (
        <div className="blog-story mini">
            <Nav />
            <div className="contact contain">
                <div className="faq_container">
                    <div className="pt_5 blog-header">
                        <h6><Link to="/">Home</Link> / <Link to={AppRoutes.blog}>Our Blog</Link> / Designing your Outdoor Space</h6>
                        <h2>Designing your Outdoor Space</h2>
                    </div>
                    <img src={Process1} alt="" />
                    <div>
                        <p>My outdoor space is my easiest connection to nature; and having a space where I can sit,
                            work, and even lay down
                            outdoors does a lot of good for my mind and body than you could possibly imagine. Spending
                            time relaxing outdoors
                            has been proven to reduce anxiety and depression, lower blood sugar, and improve the quality
                            of sleep. I know, it
                            sounds too good to be true, and yet it is.</p>
                        <p>
                            I’m somewhat of an outdoor designer myself so I know a thing or two about making ways to
                            extend your living space outdoors, and regardless of your preference or fear of “breaking
                            the bank”, there is something for every person and budget. It could be a simple lawn chair,
                            where you can sit or lay and take in all that fresh air. You could even take it a step
                            further by getting an umbrella to provide shade from the sun. This is especially important
                            in the Tropics. Lagos sun is no joke. These umbrella’s come in a variety of colors and
                            patterns to suit you taste and style.
                        </p>
                        <div className="grid_2">
                            <div >
                                <img src={BlogPhoto1} aboutlt="BlogPhoto1" />
                            </div>
                            <div >
                                <img src={BlogPhoto2} aboutlt="BlogPhoto2" />
                            </div>
                        </div>
                        <p>
                            I’m personally a huge fan of many modern outdoor structures, not only because they make the
                            umbrella seem primitive, but because they fit perfectly with homes, parks, and a host of
                            other spaces, among other reasons, but I’ll spare you all the geeky details. One of these
                            which particularly interests me is the Pergola. In its traditional state, it’s a wonder of
                            woodwork that sets up a shaded sitting area or walkway under which you can relax and enjoy
                            the great outdoors without necessarily having to make direct contact with sunlight. More
                            recently however, it has also been commonly made in metal, and in some cases combined with
                            wooden members for aesthetic or structural purposes. Another popular outdoor solution is the
                            Cabana, which is commonly found around beaches or pools. Similar to the pergola, the cabana
                            also serves as a shelter but with a completely different aesthetic appeal. Other common
                            outdoor structures include Gazebos, Pavilions and fabric canopies. Regardless of the route
                            you take in designing your space, you must have it in mind that you’re not just creating a
                            pretty space to impress people, but actually to do something nice for yourself, because
                            let’s face it, we all need a break from time to time.
                        </p>
                        <div className="grid_2">
                            <div >
                                <img src={BlogPhoto3} aboutlt="BlogPhoto1" />
                            </div>
                            <div >
                                <img src={BlogPhoto4} aboutlt="BlogPhoto2" />
                            </div>
                        </div>
                        <p>
                            Designing your outdoor space goes beyond just buying furniture or construction material.
                            It’s a journey that begins with your awareness of the potential of your space and how it can
                            contribute to your personal wellbeing. A journey that should end with your satisfaction, and
                            I personally see no better way of achieving this besides working with VO3 Designs to bring
                            your vision to reality.
                        </p>
                    </div>
                    {/* <div>
                        <div className="blog-author">
                            <h5>&mdash;Tobi Manuel Olu</h5>
                            <p>3rd September, 2022</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <Footer margin={true} />
        </div>
    )
}

export default BlogTopic1;