import React from 'react';
import PropTypes from 'prop-types';
//Components
import MobileMenu from './mobile-menu';
//Constants
import { HEADER_LINKS } from './constants';
//Styles
import styles from './header.module.scss';
//Images
import logo from '../../public/assets/images/logo.png';

const Header = ({ disableSticky }) => {
    const headerLinks = () => HEADER_LINKS.map((item) =>
        <li key={item.label}>
            {
                <a href={item.linkTo}>{item.label}</a>
            }
        </li>
    )

    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let pagTitle = document.querySelector('.page-title');
            let navigation = document.querySelector('nav');

            if (pagTitle && navigation && !disableSticky) {
                pagTitle.classList.toggle('sticky', window.scrollY > 0);
                navigation.classList.toggle('nav-sticky', window.scrollY > 0);
            }
        })
        stickyFunction();
    }

    return (
        <nav className={disableSticky ? `${styles.wrapper} ${styles.stickyDisabled}` : `${styles.wrapper}`}>
            <img alt={'Lina consulting logo'} className={`${styles.image} header-image`} src={logo} />
            <ul className={`${styles.navigation} ${styles.large_menu}`}>
                {
                   headerLinks()
                }
            </ul>
            <MobileMenu menuItems={headerLinks} />
        </nav>
    )
};

Header.prototypes = {
    disableSticky: PropTypes.bool,
};

export default Header;
