import React, { Component } from 'react';

export default class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    }
    changeMessage(){
        this.setState({
            message:'goodby'
        })
       
    }
  render() {
    
    
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeMessage.bind(this)} >clicked</button> */}
        <button onClick={()=>this.changeMessage()}> clicke</button>
      </div>
    );
  }
}
