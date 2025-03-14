import React, { Component } from 'react';

export default class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggIn:true
      }
    }
    
  render() {
    if(this.state.isLoggIn){
        return(
            <div>well come DTU</div>
        )
    }
    else{
       return(
        <div>welcome Guest</div>
       )
    }
    // return (
    //   <div>
    //     <div>well come DTU</div>
    //     <div>welcome Guest</div>
    //   </div>
    // );
  }
}

