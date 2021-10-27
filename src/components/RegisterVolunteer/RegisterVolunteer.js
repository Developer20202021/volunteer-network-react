import React, { useRef } from 'react';
import "./RegisterVolunteer.css";
import logo from "../LoginPage/Group 1329.png"
import { useState } from 'react';

















const RegisterVolunteer = () => {

    const [addClass, setClass] = useState('registratioBtn')

    const name = useRef();
    const email = useRef();
    const date = useRef();
    const description = useRef();
    const organise = useRef();


        const buttonEffect =()=>{
                const fullName = name.current.value;
                const emailId = email.current.value;
                const volunteerDate = date.current.value;
                const volunteerDescription = description.current.value;
                const organiseBooks = organise.current.value;


                const info = {
                    volunteerName:fullName,
                    volunteerEmail:emailId,
                    registrationDate:volunteerDate,
                    registrationDescription:volunteerDescription,
                    registrationorganise:organiseBooks
                }

                fetch('http://localhost:5000/volunteer-registration',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(info)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
                

                setClass("registratioBtn1")
        }
        







    return (
        <div>

        <div className="register-container">

       <div className="register-container-box">
       <div className="register-logo-container">
            <img src={logo} alt="" width='200px'/>
        </div>




        <div className="form-box">

        <div className="form-container">

        <h2>Register as a Volunteer</h2>

        <div className="input-container">
            <input type="text" ref={name} name='fullname' placeholder='Full Name' />
            <input type="text" ref={email} name='username' placeholder='Username or Email' />
            <input type="date" ref={date} name='date'/>
            <input type="text" ref={description} name='description' placeholder='Description'/>
            <input type="text" ref={organise} name='organizebooks' placeholder='Organize books at the library'/>

            <button className={addClass} onClick={buttonEffect}> Registration</button>
        </div>
























        </div>



















        </div>







       </div>

        </div>














            
        </div>
    );
};

export default RegisterVolunteer;