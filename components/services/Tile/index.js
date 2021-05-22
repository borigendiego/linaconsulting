import React from 'react';
import PropTypes from 'prop-types';
//css
import './tile.module.scss';


const Tile = ({ tileData }) => {
    const { key, image, title, text } = tileData;

    return(
        <div className={'tile-content'}>
            <img alt={`${key}-tile-img`} src={image} className={'tile-image'}/>
            <h6 className={'tile-title'}>{title}</h6>
            <p className={'tile-text'}>{text}</p>
        </div>
    )
};

Tile.prototypes = {
    key: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Tile;