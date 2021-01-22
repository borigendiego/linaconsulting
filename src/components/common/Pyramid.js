import React from 'react';
//css
import './pyramid.scss'

const Pyramid = (props) => {
    const { customClass } = props;

    return(
        <div className={`pyramid ${customClass}`}>
            {props.children}
        </div>
    )
};

export default Pyramid;