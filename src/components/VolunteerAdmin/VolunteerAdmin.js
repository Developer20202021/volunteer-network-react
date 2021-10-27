import React from 'react';
import Aside from '../Aside/Aside';
import User from './user/User';
import "./VolunteerAdmin.css"








const VolunteerAdmin = () => {
    return (
        <div>

            <div className="admin-panel-container">

            <div className="admin-box">

            <div className="aside-section">
                <Aside></Aside>
            </div>



            <div className="volunteer-registerlist">

                <div className="register-header">
                    <p>Volunteer register list</p>
                </div>




                <div className="list-container">


                    <div className="list-box">



                        <div className="list-headers">
                          
                                <p>Name</p>
                                <p>Email ID</p>
                                <p>Registarting Date</p>
                                <p>Volunteer list</p>
                                <p>Action</p>

                      

                        </div>



                        <div className="all-users">
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>
                            <User></User>


















                        </div>















                    </div>


















                </div>


























            </div>





























            </div>






















            </div>



            
        </div>
    );
};

export default VolunteerAdmin;