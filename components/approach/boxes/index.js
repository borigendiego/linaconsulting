import React, { useState } from 'react';
//css
import './boxes.scss';

const Box = (props) => {
    const { title, text, backgroundImage } = props.boxData;

    const [isHover, setIsHover] = useState(false);

    const boxStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return(
        <div
            className={ isHover ? 'box box-hover' : 'box'}
            style={boxStyle}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={'box-content'}>
                <h2 className={'box-title'}>{title}</h2>
                <p className={'box-text'}>{text}</p>
            </div>
        </div>
    )
};

export default Box;