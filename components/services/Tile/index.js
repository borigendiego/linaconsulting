import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './tile.module.scss';

const Tile = ({ tileData }) => {
    const { key, image, title, text } = tileData;

    return(
        <div className={styles.content}>
            <img alt={`${key}-tile-img`} src={image} className={styles.image}/>
            <h6 className={styles.title}>{title}</h6>
            <p className={styles.text}>{text}</p>
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