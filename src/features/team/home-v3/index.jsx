import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import TeamItem from '../team-item';
import { Link } from 'react-router-dom';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: 'Who we are',
        text: 'Our team is passionate about leveraging blockchain technology to tackle the challenges in the NFT space. We offer solutions to trace the chain of custody, detect suspicious patterns, and ensure the authenticity of digital assets. Our goal is to help marketplaces, investors, and regulators improve trust and security in the NFT ecosystem.',
        desc1: 'our mission',
        text1: 'NFTracker’s mission is to protect investors and the NFT marketplace from fraud by providing real-time tracking of NFT transactions, identifying wash trading, and ensuring the legitimacy of digital assets. We aim to foster a more secure and transparent environment for the rapidly growing NFT market.'
    })

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="tf-section tf-team gallery">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="tf-title st2 mb-49" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub sub-title">{dataBlock.subtitle}</p>
                            <h4 className="t title">{dataBlock.title}</h4>
                        </div>
                        <div className="content mobie-30 mb-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>

                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc1}
                            </div>
                            <p>{dataBlock.text1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;