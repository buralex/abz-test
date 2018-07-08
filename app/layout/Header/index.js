import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="header bg-success container-fluid outline-danger">
                <div className="col-12 content outline-danger">
                    <section className="logo">
                        <a href="/"> <img src={Logo} alt="Denteez logo" /> </a>
                    </section>

                    <section className="search">
                        <a href="/"> <img src={Logo} alt="Denteez logo" /> </a>
                    </section>

                    <section className="notifications">
                        <a href="/"> <img src={Logo} alt="Denteez logo" /> </a>
                    </section>
                </div>

            </div>
        );
    }
}

export default Header;
