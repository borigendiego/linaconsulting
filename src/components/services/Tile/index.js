import React from 'react';
//css
import './tile.scss';


const Tile = (props) => {
    const { key, image, title } = props.tileData;

    return(
        <div className={'tile-content'}>
            <img alt={`${key}-profile`} src={image} className={'tile-image'}/>
            <h6 className={'tile-text'}>{title}</h6>
        </div>
    )
};

export default Tile;