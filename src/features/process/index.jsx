import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style2.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Navigation } from 'swiper'; // <-- Add Navigation here
import 'swiper/scss';
import 'swiper/scss/navigation'; // <-- Ensure navigation styles are included
import 'swiper/scss/pagination';

import ProcessItem from './process-item';

Process.propTypes = {
    data: PropTypes.array,
};

function Process(props) {
    
    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'How It Works',
        title: 'NFTracker <br> Workflow in Action'
    });
    

    return (
        <section className="tf-section blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title mb-60">
                        <p className="h8 sub-title" data-aos="zoom-in" data-aos-duration="800">{dataBlock.subtitle}</p>
                        <h4 className="title" dangerouslySetInnerHTML={{ __html: dataBlock.title }}></h4>
                    </div>
                </div>
                <div className="col-md-12">
                <Swiper
                    modules={[Scrollbar, A11y, Navigation]}  // <-- Include Navigation here
                    spaceBetween={30}
                    scrollbar={{ draggable: true }}
                    navigation // <-- Add this to enable navigation buttons
                    breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        767: {
                        slidesPerView: 2,
                        },
                        991: {
                        slidesPerView: 3,
                        },
                    }}
                    >
                    {
                        data.map(item => (
                        <SwiperSlide key={item.id}>
                            <ProcessItem item={item} />
                        </SwiperSlide>
                        ))
                    }
                    </Swiper>

                </div>
            </div>
        </div>
    </section>
    );
}

export default Process;