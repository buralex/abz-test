import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="header">
                <a href="/">
                    <img src={Logo} alt="Denteez logo" />
                </a>

            </div>
        );
    }
}

export default Header;
