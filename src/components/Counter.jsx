import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
     this.setState({
        count: this.state.count+1
     })
    }
    decrement(){
        this.setState({
           count: this.state.count-1
        })
       }
       reset(){
        this.setState({
           count: this.state.count =0
        })
       }
    
  render() {
    return (
      <div>
        <h1>counter:{this.state.count}</h1>
        <button onClick={()=>this.increment()}>increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
        <button onClick={()=>this.reset()}>reset</button>
      </div>
    );
  }
}
