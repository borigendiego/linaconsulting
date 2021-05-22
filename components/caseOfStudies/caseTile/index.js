import React from 'react';
//Styles
import styles from './caseTile.module.scss';

const CaseTile = ({ caseData }) => {
    const { title, text } = caseData;

    return (
        <div className={styles.caseTileWrapper}>
            <h2 className={styles.caseTileTitle}>{title}</h2>
            <p className={styles.caseTileText}>{text}</p>
        </div>
    )
};

export default CaseTile;