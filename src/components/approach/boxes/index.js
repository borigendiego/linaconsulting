import React from 'react';
//css
import './boxes.scss';

const Box = (props) => {
    const { title, text } = props.boxData;

    return(
        <div className={'box-content'}>
            <h2 className={'box-title'}>{title}</h2>
            <p className={'box-text'}>{text}</p>
        </div>
    )
};

export default Box;