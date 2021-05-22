import React, { useState } from 'react';
//css
import styles from './boxes.module.scss';

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
            className={ isHover ? `${styles.boxHover} ${styles.box}` : styles.box}
            style={boxStyle}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={'box-content'}>
                <h2 className={styles.boxTitle}>{title}</h2>
                <p className={styles.boxText}>{text}</p>
            </div>
        </div>
    )
};

export default Box;