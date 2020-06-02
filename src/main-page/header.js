import React from "react";
import logo from './GlobalLogo.png';

const Header = (props) => (
    <header className="row">
        <div className="col-md-9">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-3 mt-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;