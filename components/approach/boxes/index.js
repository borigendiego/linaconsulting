import React, { useState } from 'react';
//css
import styles from './boxes.module.scss';

const Box = ({ boxData }) => {
    const { title, text, backgroundImage } = boxData;
    const [isHover, setIsHover] = useState(false);

    const boxStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return(
        <div
            className={ isHover ? `${styles.hover} ${styles.box}` : styles.box}
            style={boxStyle}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={'box-content'}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
};

export default Box;