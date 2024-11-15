import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item';
import Button from '../../../components/button';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle: 'About Us',
            title: 'What is NFTracker?',
            desc: 'NFTracker is a powerful blockchain analysis tool designed to track, analyze, and flag potentially illicit activities within the NFT (Non-Fungible Token) market. As NFT trading volumes continue to grow, NFTracker brings advanced analytics and monitoring capabilities to detect suspicious transactions and patterns, such as wash trading, price manipulation, and other indicators of fraud or money laundering. By leveraging blockchain data and customizable parameters, NFTracker provides insights into high-value trades, wallet activity, and trading anomalies, helping law enforcement, financial institutions, and regulatory agencies ensure transparency and security within the NFT ecosystem.'
        }        
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about mobie-40 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd30 center'>{dataBlock.desc}</p>
                        </div>
                    </div>

                        {
                            data.map(item => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                    <AboutItem item={item} />
                                </div>
                            ))
                        }
                    <div className="col-md-12">
                        <div className="btn-about center" data-aos="fade-up" data-aos-duration="800">
                            <Button title='get Nfts' path='#' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;