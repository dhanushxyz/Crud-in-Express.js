import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"

function Fgetid() {

    const [id, setid] = useState(0);
    const [det, setdet] = useState([])


    
    const changehandle = (e) =>{
        setid(e.target.value);
        
    }
    const disp = (e) =>{
        Axios.get(`http://localhost:3001/deleteemp/${id}`).then(res =>{

            setdet(res.data);
            
            
            
        })
        e.preventDefault()
        
    }
    
  return (

    <div class = "App">
        <form onSubmit = {disp}>
            
                    <div>
                        <input type='text'  placeholder='id' onChange = {changehandle}/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    {det.map((val)=>{
                return(
                      <div>
                          <h1>Name : {val.name}</h1>
                          <h1>Gender: {val.gender}</h1>
                          <h1>Dept No: {val.dept_no}</h1>
                          <h1>City:{val.city}</h1>

                      </div>  
                )
            })}
                    
        </form>
        <div>

        </div>
    </div>
  )
  
}


export default Fgetid