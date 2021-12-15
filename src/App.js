
import React from 'react';
import './App.css';
import Counter from './Counter';


class App extends React.Component{

state={  x:false   }


toggleshow=()=>{    this.setState({ x: ! this.state.x   })   }



  render(){

    return (
      <div>
        <button  onClick={()=>this.toggleshow()}  >      {this.state.x ? 'hide'   :"show" }     </button>
        {/* {this.state.count==true ? <Counter></Counter>  : null } */}

<input   type= {  this.state.x ? 'text' : "password"  }       />
        {  this.state.x &&    <Counter    x={this.state.x}   name="bilel"  ></Counter>  }
     
      </div>
    )
  }



}

export default App;
