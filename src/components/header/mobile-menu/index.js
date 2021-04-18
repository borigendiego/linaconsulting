import React from 'react';
import PropTypes from 'prop-types';
//Components
import { Link } from 'react-router-dom';
//Style
import './mobileMenu.scss';

const MobileMenu = ({ menuItems }) => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={'menu'}>
                {
                    menuItems.map((link,index) => <Link key={index} to={link.linkTo}><li>{link.label}</li></Link>)
                }
            </ul>
        </div>
    )
};

MobileMenu.prototype = {
    menuItems: PropTypes.array,
}

export default MobileMenu;