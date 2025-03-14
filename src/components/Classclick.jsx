import React, { Component } from 'react';

export default class Classclick extends Component {
    
    handlclick(){
      console.log("click the handl");
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handlclick}>click</button>
      </div>
    );
  }
}
