import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"

function Fshow() {
    
    const [det, setdet] = useState([]);



    useEffect(() => {
      
        Axios.get("http://localhost:3001/getallemployee").then(res =>{

            setdet(res.data);
            
            
            
        })
         
      
      
    });
          

  return (
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
}

export default Fshow