import React, { Component } from 'react';

 class Message extends Component {
    constructor(){
        super()
        this.state={
            Message:'welcome to visitor'
        }
    }
    changeMessage(){
        this.setState({
            Message:'Thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={()=> this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}
export default Message;