import React, { useLayoutEffect, useRef } from 'react';
import axios from 'axios';
import './AddEvent.css'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';
import Aside from '../Aside/Aside'
import { Button } from '@mui/material';
const Input = styled('input')({
    display: 'none',
  });

const AddEvent = () => {


    const title = useRef();

    const date = useRef();

    const description = useRef();


    const file = useRef();




   



        const submitFile =()=>{
            const getTile = title.current.value;
            const getFile = file.current.files[0];
            const getDescription = description.current.value;
            const getDate = date.current.value;
        
            const formData = new FormData();
         
        
            formData.append('file', getFile);
            formData.append('date',getDate)
            formData.append('description', getDescription)
            formData.append('title',getTile)
            

           
            // axios.post('http://localhost:5000/post',formData,{  
            // headers: {
            //     "Content-Type": "multipart/form-data"
            //   }})
            // console.log(formData);
            
            fetch('http://localhost:5000/post-add-event', {

                method:"POST",
                body:formData
            }).then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))




        





        }

















    return (
        <div>
            <div>

<div className="admin-panel-container">

<div className="admin-box">

<div className="aside-section">
   <Aside></Aside>
</div>



<div className="volunteer-registerlist">

    <div className="register-header">
        <p>Add Event</p>
    </div>




    <div className="list-container">


        <div className="list-box">

        <form action="">

            <div className="form-container-section">
              
                <div className="addevent-form-conatiner">
                    
                    <div className="event-part-1">

                       <div>
                       <label htmlFor="">Event Title  </label>
                        <input ref={title} type="text" placeholder='Event Title'/>
                       </div>
                      

                        <div>
                        <label htmlFor="">Description </label>
                        <textarea ref={description} name="" id="" cols="30" rows="6" placeholder='Enter Description'></textarea>
                        </div>
                       






                    </div>

                    <div className="event-part-2">

                    <div>
                    <label htmlFor="">Event Date</label>
                    <input ref={date} type="date" />
                    </div>

              <div>
              <label htmlFor="">Banner</label>
                    
                    <label htmlFor="contained-button-file">
                    <Input ref={file} accept="image/*" id="contained-button-file" multiple type="file" name='file'/>
                    <Button  variant="contained" component="span">
                     Upload
                     </Button>
                    </label>
              </div>






                    </div>

















                 

                </div>

               

                    

          

            </div>
        

            </form>
            
           


        
              
            



















 

           













        </div>
                <div className="submitbutton">
                   
                    <button onClick={submitFile}>Submit</button>
                </div>


















    </div>


























</div>





























</div>






















</div>




</div>
            
        </div>
    );
};

export default AddEvent;