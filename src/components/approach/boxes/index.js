import React from 'react';
//css
import './boxes.scss';

const Box = (props) => {
    const { title, text, backgroundImage } = props.boxData;

    const boxStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return(
        <div className={'box'} style={boxStyle}>
            <div className={'box-content'}>
                <h2 className={'box-title'}>{title}</h2>
                <p className={'box-text'}>{text}</p>
            </div>
        </div>
    )
};

export default Box;