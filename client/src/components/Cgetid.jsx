import React, { Component } from 'react'
import Axios from 'axios'
import "../css/style.css"
import "../App.css"

export class Cgetid extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       det: [],
       id: 0,
    }
  }
  disp = (e) =>{
    Axios.get(`http://localhost:3001/deleteemp/${this.state.id}`).then(res =>{

      this.setState({det:res.data});
        
        
        
    })
    e.preventDefault()
    
}

changehandle = (e) =>{
  this.setState({id: e.target.value})
  
}
   
  render() {

    
    
    return (
      <div>
        <div class = "App">
        <form onSubmit = {this.disp}>
            
                    <div>
                        <input type='text'  placeholder='id' onChange = {this.changehandle}/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                    {this.state.det.map((val)=>{
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
      </div>
    )
  }
}

export default Cgetid