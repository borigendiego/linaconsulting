import React from 'react';
import PropTypes from 'prop-types';
//Css
import styles from './SectionLayout.module.scss';

const SectionLayout = ({ sectionTitle, sectionSubTitle, sectionId, children, layoutWidth }) => {
    const layoutPadding = {
        full: '0',
        lg: '0 10%',
        mg: '0 40%'
    }

    return (
        <div className={styles.sectionContainer} id={sectionId} style={{padding: layoutPadding[layoutWidth]}}>
            <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
            <h3 className={styles.sectionSubtitle}>{sectionSubTitle}</h3>
            {children}
        </div>
    )
};

SectionLayout.prototypes = {
    sectionTitle: PropTypes.string,
    sectionSubTitle: PropTypes.string,
    sectionId: PropTypes.string,
    layoutWidth: PropTypes.string,
};

export default SectionLayout;

