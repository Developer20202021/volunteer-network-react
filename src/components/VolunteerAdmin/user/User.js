import React from 'react';
import "./User.css";






const User = ({value}) => {
    const {_id,volunteerName, volunteerEmail, registrationDate, registrationDescription, registrationorganise} = value;
    console.log(value);




    const deleteInfo = ()=>{
        fetch(`http://localhost:5000/volunteers/register-delete/${_id}`,{
            method:"DELETE"
        })
        console.log(_id);
    }
    return (
        // <div>
        <tr>


            {/* <div className="user-container"> */}

                <td>{volunteerName}</td>
                <td>{volunteerEmail}</td>
                <td>{registrationDate.split('T')[0]}</td>
                <td>{registrationorganise}</td>
                <td className='delete-btn' onClick={deleteInfo}><i class="far fa-trash-alt"></i></td>

            {/* </div> */}
            
        {/* // </div> */}
        </tr>
    );
};

export default User;