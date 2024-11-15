import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WorkItem from '../work-item';

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Join Us Today',
        title: 'BECOME A MEMBER OF NFTracker',
        desc: 'Protect your NFT investments and ensure authenticity with NFTracker. Join our community to gain access to powerful tools for fraud detection, transaction monitoring, and more.'
    })
    return (
        <section className="tf-section how-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                            <p className="p-r60">{dataBlock.desc} </p>
                        </div>
                    
                    </div>

                    {
                        data.map(item => (
                            <div key={item.id} className="col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                <WorkItem item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Work;