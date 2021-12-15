
import React from 'react'
class Counter extends React.Component{


constructor(props){
    super(props)
    this.state= {  count:0 , text:'' }


    console.log("1.  constructor")
}


componentDidMount(){
   document.title="hi"
  
}

componentDidUpdate(){
    // document.querySelector('.c').style.backgroundColor="black"
document.title=this.state.count
}

componentWillUnmount(){
    document.title="bye"
}

increment=(num)=>{  this.setState({ count: this.state.count+num   })      }

decrement =()=>{   this.setState({   count:  this.state.count>0 ?    this.state.count-1 :0    })  }

    render(){
console.log('render')

        return (

            <div   className='c' >
                <button     onClick={()=>this.increment(5)}   >+</button>
                <span>  {this.state.count}   </span>
                <button    onClick={this.decrement}    >-</button>
                <input  type='text'   onChange={ (e)=>  this.setState({ text:e.target.value  })   }  />
                <h1>{this.state.text}</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }


}
export default Counter