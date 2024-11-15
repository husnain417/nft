import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles2.scss';

ProcessItem.propTypes = {
    item: PropTypes.object,
};

function ProcessItem(props) {
    const { item } = props;

    return (
        <div className="post-item">
            <div className="wrap">
                <div className="image">
                    <img src={item.img} alt="Process Step" />
                </div>
                <div className="content-item">
                    <div className="content">
                        <div className="h7 title">
                            <h7 className='tt'>{item.title}</h7>
                            <h6 className='tx'>{item.text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProcessItem;
