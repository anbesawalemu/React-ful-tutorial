import React, { Component } from 'react';

class Refsdemo extends Component {
    constructor(props) {
      super(props)
      
      this.inputRef=React.createRef() 
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handlclick = ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handlclick}>click</button>
      </div>
    );
  }
}

export default Refsdemo;
