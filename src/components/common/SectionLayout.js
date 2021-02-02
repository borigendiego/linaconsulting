import React from 'react';
import PropTypes from 'prop-types';
//Css
import './SectionLayout.scss';


const SectionLayout = (props) => {
    const { sectionTitle, sectionSubTitle, sectionId } = props;

    return (
        <div className={'section-container'} id={sectionId}>
            <h1 className={'section-title'}>{sectionTitle}</h1>
            <h3 className={'section-subtitle'}>{sectionSubTitle}</h3>
            <div className={'content'}>
                {props.children}
            </div>
        </div>
    )
};

SectionLayout.prototypes = {
    sectionTitle: PropTypes.string,
};

export default SectionLayout;
