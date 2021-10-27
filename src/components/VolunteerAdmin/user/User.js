import React from 'react';
import "./User.css";






const User = () => {
    return (
        <div>


            <div className="user-container">

                <p>Mahadi Hasan</p>
                <p>mahadi@gmail.com</p>
                <p>22/10/2022</p>
                <p>Organise books at the library</p>
                <p className='delete-btn'><i class="far fa-trash-alt"></i></p>

            </div>
            
        </div>
    );
};

export default User;