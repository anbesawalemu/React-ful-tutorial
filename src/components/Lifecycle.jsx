import React, { Component } from 'react';

 class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'anbesaw'
      }
      console.log('lifecycle of the methods')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    conponentDidMount(){
        console.log('lifecycleA componenetDidMount')
    }
    
  render() {
    console.log('lifecycleA render')
    return (
      <div>
        lifecycleA
      </div>
    );
  }
}

export default Lifecycle;
