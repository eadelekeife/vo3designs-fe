import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
        <div className="top_nav">
            <p>Free shipping on all orders!</p>
            <div>
                <ul>
                    <li><Link to="">Free Swatches</Link></li>
                    <li><Link to="">Showrooms</Link></li>
                    <li><Link to="">Reviews</Link></li>
                    <li><Link to="">Refer a Friend</Link></li>
                    <li><Link to="">About</Link></li>
                </ul>
            </div>
            {/* <p>Save up to 15% With Pack Discounts + Free Shipping over $50.</p> */}
        </div>
    )
}

export default Top;