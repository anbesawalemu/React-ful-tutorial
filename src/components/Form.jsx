import React, { Component } from 'react';

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'react'
      }
    }
    handlchange=(event)=>{
       this.setState({
        username:event.target.value
       })
    }
    chngehandl=(event)=>{
    this.setState({
        comment:event.target.value
    })
    }
    handlselect=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handlsubmit=(event)=>{
        alert(`${this.state.username}  ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
        <form  onSubmit={this.handlsubmit}>
      <div>
      <label htmlFor="">username:</label>
      <input type="text" value={this.state.username} onChange={this.handlchange}/>
      </div>
      <div>
        <label htmlFor="">comment</label>
        <textarea name="text" value={this.state.comment} onChange={this.chngehandl} >

        </textarea>
      </div>
      <div>
        <label htmlFor="">Topics</label>
        <select name="text" value={this.state.topic} onChange={this.handlselect} >
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
        </select>
      </div>
      <button type='submit' >submit</button>
      </form>
    );
  }
}

export default Form;
