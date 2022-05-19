import React, { Component } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"
export class Cshow extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         det : []
      }
    }
    componentDidMount() {
        Axios.get("http://localhost:3001/getallemployee").then(res =>{

            this.setState({det:res.data})
            
            
            
        })
        console.log(this.state.det)
    }
  render() {
      
      
     
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
            {this.state.det.map((val)=>{
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
}

export default Cshow