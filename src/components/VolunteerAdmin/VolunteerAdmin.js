import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import User from './user/User';
import "./VolunteerAdmin.css"








const VolunteerAdmin = () => {

    const [registers, setRegisters] = useState([])


useEffect(()=>{
    fetch('http://localhost:5000/volunteers/register-list')
    .then(res=>res.json())
    .then(data=>{

        setRegisters(data.allRegisterInfo)

        console.log(data.allRegisterInfo);
    })
    .catch(err=>{
        console.log(err);

    })
},[])









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



                        {/* <div className="list-headers"></div> */}
                        <table className="list-headers">
                                <thead>
                                <td>Name</td>
                                <td>Email ID</td>
                                <td>Registarting Date</td>
                                <td>Volunteer list</td>
                                <td>Action</td>

                                </thead>

                      


                        

                        {/* <div className="all-users"> */}
                            {registers?.map(register=><User value={register}></User>)}

                            {/* <User></User>
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
                            <User></User> */}


















                        {/* </div> */}
                        </table>















                    </div>


















                </div>


























            </div>





























            </div>






















            </div>



            
        </div>
    );
};

export default VolunteerAdmin;