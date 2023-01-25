import '../style.css';

import React from 'react';

import { Divider } from 'antd';
import Nav from '../../../utils/sec-nav';
import Footer from '../../../utils/footer';

import BlogPhoto1 from '../../../assets/images/blog/blogphoto5.jpg';
import BlogPhoto2 from '../../../assets/images/blog/blogphoto6.jpg';
import BlogPhoto3 from '../../../assets/images/blog/blogphoto7.jpg';
import BlogPhoto4 from '../../../assets/images/blog/blogphoto8.jpg';
import BlogPhoto5 from '../../../assets/images/blog/blogphoto9.jpg';
import BlogPhoto6 from '../../../assets/images/blog/blogphoto10.jpg';
import Process1 from '../../../assets/images/blog/picture2.jpg';

import AppRoutes from '../../../utils/routes';
import { Link } from 'react-router-dom';


const BlogTopic1 = () => {
    return (
        <div className="blog-story mini">
            <Nav />
            <div className="contact contain">
                <div className="faq_container">
                    <div className="pt_5 blog-header">
                        <h6><Link to="/">Home</Link> / <Link to={AppRoutes.blog}>Our Blog</Link> / 5 ways to use or repurpose wooden crates</h6>
                        <h2>5 ways to use or repurpose wooden crates</h2>
                    </div>
                    <img src={Process1} alt="" />
                    <div>
                        <p>Let’s start with a little description of the wooden crate. I’m sure we’ve all come across
                            those slatted wooden boxes or framework sometimes used for packaging drinks, glassware,
                            fruits, vegetables etc. Wooden crates are one of the most secure ways to transport goods,
                            their solid build protects the commodities inside, they are durable, reusable, and an
                            earth-friendly option for packaging and shipping supplies.</p>
                        <p>
                            I however want to focus on their use as decorative pieces that can bring life to your room
                            décor. Wooden crates can bring a rustic, Boho vibe into your space, they can be incorporated
                            perfectly into every area of your home, from the living room, to bedroom, study room etc.
                        </p>
                        <p>
                            Should you find yourself with a surplus of wooden crates at home or at work? Do you feel too
                            guilty about throwing them out, but you’re not entirely sure what to do with them instead?
                            Here are various unique ways by which you can use and repurpose your wooden crates;
                        </p>
                        <h5>1. CRATE DESK</h5>
                        <div >
                            <img src={BlogPhoto1} aboutlt="BlogPhoto1" />
                        </div>
                        <p>
                            Do you have large crates? Try stacking two on each side for desk legs and then laying a
                            steady board or glass sheet across the top for a table top! Make sure that the openings
                            of the crates face outwards so you can use them as shelves for books or office
                            supplies. There you go!!! You can work comfortably for as long as you want.
                        </p>
                        <h5>2. CRATE BAR</h5>
                        <div >
                            <img src={BlogPhoto2} aboutlt="BlogPhoto1" />
                        </div>
                        <p>
                            This is a perfect solution for apartments or for cocktail services, the best part is they
                            are easily demountable and can be moved from space to space. Find a corner where the
                            crates will fit stack them up in a suitable way to allow for easy storage, mixing of
                            drinks, as well as display of your bottles and drinks. Feel free to add a splash of colour.
                        </p>
                        <h5>3. CRATE BOOK SHELF</h5>
                        <div className="grid_2">
                            <div >
                                <img src={BlogPhoto3} aboutlt="BlogPhoto1" />
                            </div>
                            <div >
                                <img src={BlogPhoto4} aboutlt="BlogPhoto2" />
                            </div>
                        </div>
                        <p>
                            The more crates you have, the better! Stacking crates to form a simple shelving unit is the
                            perfect and quick fix for a room short on storage or display space . We love the idea for
                            storing books or important files in a rustic or shabby chic space. This shelf can also
                            double as a room divider to help optimize your space.
                        </p>
                        <h5>4. CRATE COFFEE TABLE</h5>
                        <div >
                            <img src={BlogPhoto5} aboutlt="BlogPhoto1" />
                        </div>
                        <p>
                            If your crates are large, grab four of them and create this visually fantastic coffee 
                            table full of useful storage cubbies! Turn the crates on their side and line them up so 
                            the end of each one rests against the back of another. Vo3Designs has walked you through 
                            the process of positioning and attaching them.
                        </p>
                        <h5>5. KIDS TOY BOXES</h5>
                        <div >
                            <img src={BlogPhoto6} aboutlt="BlogPhoto1" />
                        </div>
                        <p>
                            Pick out a large wooden crate or several small ones to allow room for storing lots of toys,
                            Ensure you pick out sturdy ones, as these particular set of crates tend to receive a
                            beating. Add on a cover , its always best to make the covers padded, so they can also double
                            as seats. Add castors at the base for ease of movement, ensure these castors are lockable
                            for safety.
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