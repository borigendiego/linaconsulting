import React from 'react';
import PropTypes from 'prop-types';
//Components
import MobileMenu from './mobile-menu';
//Constants
import { HEADER_LINKS } from './constants';
//Styles
import './header.scss';
//Images
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ disableSticky }) => {
    const headerLinks = () => HEADER_LINKS.map((item) =>
        <li key={item.label} className={'nav-element'}>
            {
                item.isAnchor
                ? <a href={item.linkTo}>{item.label}</a>
                : <Link to={item.linkTo}>{item.label}</Link>
            }
        </li>
    )

    return (
        <nav className={disableSticky ? 'header-wrapper sticky-disabled' : 'header-wrapper'}>
            <div className={'header-image-wrapper'}>
                <img alt={'logo'} className="header-image" src={logo} />
            </div>
            <ul className={'nav-menu'} id={'large-screen-menu'}>
                {
                   headerLinks()
                }
            </ul>
            <MobileMenu menuItems={headerLinks} />
            <script type={'text/javascript'}>
                {
                    window.addEventListener('scroll', function() {
                        let header = document.querySelector('nav');

                        if (header && !disableSticky) {
                            header.classList.toggle("sticky", window.scrollY > 0);
                        }
                    })
                }
            </script>
        </nav>
    )
};

Header.prototypes = {
    disableSticky: PropTypes.bool,
};

export default Header;