import React, { useRef } from 'react';
import "./RegisterVolunteer.css";
import logo from "../LoginPage/Group 1329.png"
import { useState } from 'react';

















const RegisterVolunteer = () => {

    const [addClass, setClass] = useState('registratioBtn')
    const [msg, setMsg] = useState('')

    const [newUser, setNewUser] = useState('')
    const [number, setNumber] = useState();

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
                .then(res=>{
                    if (res.status===200) {
                    setMsg('Your registration successfull')
                    setNumber(200)
                    return res.json()
                     }
                     if(res.status===400){
                       setMsg('Please fill up the full form')
                       setNumber(400)
                     }
            
            
            })
                .then(data=>console.log(data))
                .catch(err=>{
                    console.log(err);
                })
              
                

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

        {number===200?<div className='registation-successMsg'><img src='https://www.kindpng.com/picc/m/431-4312134_transparent-success-icon-hd-png-download.png' width='30px'></img><span>{msg}</span></div>:null}
        {number===400?<div className='registation-wrongMsg'><img src='https://image.similarpng.com/very-thumbnail/2020/11/InCorrect-icon-in-sticker-style-on-transparent-background-PNG.png' width='20px'></img><span>{msg}</span></div>:null}
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