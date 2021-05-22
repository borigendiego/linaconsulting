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
            let header = document.querySelector('nav');

            if (header && !disableSticky) {
                header.classList.toggle(`${styles.sticky}`, window.scrollY > 0);
            }
        })
        stickyFunction();
    }

    return (
        <nav className={disableSticky ? `${styles.wrapper} ${styles.stickyDisabled}` : `${styles.wrapper}`}>
            <div className={styles.image_wrapper}>
                <img alt={'Lina consulting logo'} className={styles.image} src={logo} />
            </div>
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