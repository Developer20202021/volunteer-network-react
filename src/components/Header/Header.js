import React from 'react';
import './Header.css'
import logo from '../LoginPage/Group 1329.png'
import { NavLink } from 'react-router-dom';








const Header = () => {



    return (
        <div>

            <div className="header-box-container">
                <div className="header-box-part">
                    <div className="header-logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="header-all-link">
                      <p><NavLink to='/'>Home</NavLink></p>

                       <p> <NavLink to='/donation'>Donation</NavLink></p>
                       <p> <NavLink to='/events'>Events</NavLink></p>
                        <p><NavLink to='/'>blog</NavLink></p>

                       <p className='header-register-btn'> <NavLink to='/login'>Register</NavLink></p>
                        <p className='header-admin-btn'>   <NavLink to='/admin/2'>Admin</NavLink></p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;