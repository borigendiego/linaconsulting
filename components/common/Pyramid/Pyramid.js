import React from 'react';
//css
import styles from './pyramid.module.scss'

const Pyramid = ({ customClass, children }) => {
    return (
        <div className={`${styles.pyramid} ${customClass}`}>
            {children}
        </div>
    )
};

export default Pyramid;