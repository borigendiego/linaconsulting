import React from 'react';
import { HEADER_LINKS } from './constants';
//Styles
import './header.scss';

const Header = () => {
    return (
        <nav className={'nav-container'}>
            <div className={'header-wrapper'}>
                <ul id={'big-screen-menu'} className={'nav-menu'}>
                    {
                        HEADER_LINKS.map((link,index) => <a key={index} href={link.linkTo} className={'header-elements'}><li>{link.label}</li></a>)
                    }
                </ul>
            </div>
        </nav>
    )
};

export default Header;


//<script type={'text/javascript'}>
//             {
//                 window.addEventListener("scroll", function() {
//                 var header = document.querySelector("header");
//                 header.classList.toggle('sticky', window.scrollY > 0);
//                 })
//             }
//             </script>