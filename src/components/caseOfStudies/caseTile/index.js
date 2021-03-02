import React from 'react';
//Styles
import './caseTile.scss'
const CaseTile = (props) => {

    const { id, title, text } = props.caseData;

    return (
        <div className={'case-tile-wrapper'}>
            <h2 className={'case-tile-title'}>{title}</h2>
            <p className={'case-tile-text'}>{text}</p>
        </div>
    )
};

export default CaseTile;