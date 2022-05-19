import React, { Component } from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"

export class Cgetgender extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           det: [],
           gender: '',
        }
      }
      disp = (e) =>{
        Axios.get(`http://localhost:3001/gend/${this.state.id}`).then(res =>{
    
          this.setState({det:res.data});
            
            
            
        })
        e.preventDefault()
        
    }
    
    changehandle = (e) =>{
      this.setState({id: e.target.value})
      
    }
       
      render() {
    
        
        
        return (
            <div class = "App">
        <form onSubmit = {this.disp}>
            
                    <div>
                    <select onChange={this.changehandle}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    {this.state.det.map((val)=>{
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
                        {this.state.det.map((val,key)=>{
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
}

export default Cgetgender