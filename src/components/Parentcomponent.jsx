import React, { Component } from 'react';
import Childcomponent from './Childcomponent';

export default class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentcomponent:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(){
        alert(`Hello    ${this.state.parentcomponent}`)
    }
  render() {
    return (
      <div>
        <Childcomponent greethandler={this.greetparent}></Childcomponent>
      </div>
    );
  }
}

