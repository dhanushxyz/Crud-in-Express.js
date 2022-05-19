import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"

function Fgetbygender() {
    const [gender, setgender] = useState("");
    const [det, setdet] = useState([])


    
    const changehandle = (e) =>{
        setgender(e.target.value);
        
    }
    const disp = (e) =>{
        Axios.get(`http://localhost:3001/gend/${gender}`).then(res =>{

            setdet(res.data);
            
            
            
        })
        e.preventDefault()
        
    }
    
  return (

    <div class = "App">
        <form onSubmit = {disp}>
            
                    <div>
                    <select onChange={changehandle}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    {det.map((val)=>{
                return(
                    <div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>employee_id</th>
                                <th>name</th>
                                <th>gender</th>
                                <th>dept_no</th>
                                <th>city</th>
                                <th>email</th>
                            </tr>
                            </thead>
                        {det.map((val,key)=>{
                            return(
                                
                                  <tbody>
                                  <tr>
                                        <td>{val.employee_id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.dept_no}</td>
                                        <td>{val.city}</td>
                                        <td>{val.email}</td>
                                        
                                  </tr>
                                  </tbody>
                                  
                                
                              
                            )
                        })}
                        </table>
                    </div>
                </div> 
                )
            })}
                    
        </form>
        <div>

        </div>
    </div>
  )
  

}

export default Fgetbygender