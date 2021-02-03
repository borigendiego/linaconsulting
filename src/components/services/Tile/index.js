import React from 'react';
//css
import './tile.scss';


const Tile = (props) => {
    const { key, image, title, text } = props.tileData;

    return(
        <div className={'tile-content'}>
            <img alt={`${key}-tile-img`} src={image} className={'tile-image'}/>
            <h6 className={'tile-title'}>{title}</h6>
            <p className={'tile-text'}>{text}</p>
        </div>
    )
};

export default Tile;