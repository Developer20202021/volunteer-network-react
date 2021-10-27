import React from 'react';
import './Header.css';
import logo from '../LoginPage/Group 1329.png'








const Header = () => {
    return (
        <div>

            <div className="header-container">
                <div className="header-box">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="header-link">
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;