import React from 'react';
import logo from "./Group 1329.png"
import { NavLink } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div>

        <div className="login-container">

            <div className="log-in-logo">
                <img src={logo}alt="" width='200px' height='100px'/>
            </div>




            <div className="login-box-container">

                <div className="log-in-box">
                    <h2>Login With</h2>

                    <div className="google-singin-container">

                        <div className="log-in-button">

                       <div className="google-logo">
                       <img src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" width='50px' />
                       </div>
                        <div className='continue-with'>Continue with Google</div>



                        </div>


                    </div>


                    <div className="new-register">

                        <p>Don't have an account? <NavLink to='/register'>Create an account</NavLink></p>

                    </div>






                </div>

            </div>






        </div>




            
        </div>
    );
};

export default Login;