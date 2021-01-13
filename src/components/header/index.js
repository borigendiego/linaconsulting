import React from 'react';
//Styles
import './header.scss';

const Header = () => {
    return (
        <header className={'header'}>
            <a href={'#'} className={'logo'}>Logo</a>
            <ul className={'menu-links'}>
                <li><a>HOME</a></li>
                <li><a>SERVICES</a></li>
                <li><a>OUR APPROACH</a></li>
                <li><a>CASE STUDIES</a></li>
                <li><a>ABOUT US</a></li>
                <li><a>CONTACT</a></li>
            </ul>

            <script type={'text/javascript'}>
            {
                window.addEventListener("scroll", function() {
                var header = document.querySelector("header");
                header.classList.toggle('sticky', window.scrollY > 0);
                })
            }
            </script>
        </header>
    )
};

export default Header