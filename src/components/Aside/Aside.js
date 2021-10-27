import React, { useState } from 'react';
import "./Aside.css";
import logo from "../LoginPage/Group 1329.png"
import { useHistory, useParams } from 'react-router';





const Aside = () => {

    
    const history = useHistory();
    const {id} = useParams()
    const [effect, setEffect] = useState(id);

    const buttonEffect = (number)=>{
            setEffect(id)
            if (number==2) {
                history.push(`/add-event/${2}`)
               
            }
            if (number==1) {
                history.push(`/admin/${1}`)
               
            }
    }






    return (
        <div>

        <div className="aside-container">


        <div className="aside-box">

            <div className="aside-logo-container">
                <img src={logo} alt="" width='160px'/>
            </div>

            <div className="aside-list-container">

                <p className={effect==1?'register-list':'add-event'}onClick={()=>buttonEffect(1)}>
                    <span className='user-icon'>
                    <i class="fas fa-users"></i>
                    </span>
                    <span>
                        Volunteer register list
                    </span>
                </p>
                {/* 'add-event' */}

                <p className={effect==2?'register-list':'add-event'} onClick={()=>buttonEffect(2)}>

                    <span className='plus-name'>
                    <i class="fas fa-plus"></i>
                    </span>
                    <span>Add event</span>
                </p>



            </div>





        </div>



















        </div>







            
        </div>
    );
};

export default Aside;