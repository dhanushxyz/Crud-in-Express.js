import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"
function Fgetdept() {
  
    const [dept, setdept] = useState([]);
    const [det, setdet] = useState([])
    var str = ""
    var i =0
    
    const changehandle = (e) =>{
        setdept([...dept ,e.target.value]);
        
    }
    console.log(dept)
    const disp = (e) =>{
        
        str = str + `dept_no = (select dept_no from departments where dept_name = "${dept[0]}")`
        if(dept.length >1)
        {
            for(i=1;i<dept.length;i++)
            {
                str = str + ` or dept_no = (select dept_no from departments where dept_name =  "${dept[i]}")`
            }
        }
        console.log(str);
        Axios.post(`http://localhost:3001/dept`,{deptem:str,}).then(res =>{

            setdet(res.data);
            
            
            
        })
        e.preventDefault()
        
    }
    
  return (

    <div className= "App">
        <form onSubmit = {disp}>
            
                    <div>
                    <input type="checkbox" value="Production" onChange={changehandle}></input>producrtion
                    <input type="checkbox" value="Administration" onChange={changehandle}></input>administration
                    <input type="checkbox" value="Finance" onChange={changehandle}></input>finance
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
        
    </div>
  )
  

}


export default Fgetdept