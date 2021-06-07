import React from 'react';
//Styles
import styles from './caseTile.module.scss';

const CaseTile = ({ caseData }) => {
    const { title, text } = caseData;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    )
};

export default CaseTile;