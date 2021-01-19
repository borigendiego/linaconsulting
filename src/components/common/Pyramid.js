import React from 'react';
//css
import './pyramid.scss'


const Pyramid = (props) => {
    const { title, text } = props;

    return(
        <div className={'pyramid'}>
            <h2 className={'pyramid-title'}>{title}</h2>
            <p className={'pyramid-text'}>{text}</p>
        </div>
    )
};

export default Pyramid;