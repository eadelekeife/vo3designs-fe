import './style.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import axiosCall from '../../utils/axiosCall';

import { Divider, Skeleton } from 'antd';
import Nav from '../../utils/sec-nav';
import Footer from '../../utils/footer';

const About = () => {

    const params = useParams();
    const [imageBox, setImageBox] = useState({});
    const [fetchingData, setFetchingData] = useState(true);
    const [current] = useState(1);

    const [errorMessage, setErrorMessage] = useState('');
    const [spinnerStatus, setSpinnerStatus] = useState(true);

    useEffect(() => {
        const companyId = params.companyId;
        setFetchingData(true);
        setImageBox({});
        axiosCall(`/products/portfolio/all-portfolio-companies/${companyId}`)
            .then(categoryData => {
                if (categoryData.data.statusMessage === "success") {
                    setImageBox(categoryData.data.message);
                    setSpinnerStatus(false);
                    setFetchingData(false);
                } else {
                    setErrorMessage(categoryData.data.summary)
                    setSpinnerStatus(false);
                }
            })
            .catch(err => {
                setErrorMessage('An error occurred while fetching category data. Please reload page to try again');
                setSpinnerStatus(false);
            })
    }, [params.companyId])

    return (
        <div className="mini">
            <Nav />
            <div className="portfolio contain mt_5">
                <div className="faq_container">
                    {
                        fetchingData ?
                            <div>
                                <div>
                                    <Skeleton.Image active />
                                    <Skeleton active />
                                </div>
                            </div>
                            :
                            <div>
                                <h3 className="portfolio-title">{imageBox?.companyName}</h3>
                                <img src={imageBox?.portfolioImages[0]?.imageLink} alt="" />
                                {
                                    imageBox.portfolioImages.length ?
                                        <div className="grid_4">
                                            {imageBox?.portfolioImages.map((images, index) => {
                                                return (
                                                    <img key={index} src={images.imageLink} alt={imageBox.companyName} />
                                                )
                                            })}
                                        </div>
                                        : ''
                                }
                            </div>
                    }
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default About;