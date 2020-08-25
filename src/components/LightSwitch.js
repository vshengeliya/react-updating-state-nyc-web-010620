import React from 'react'

class LightSwitch extends React.Component{


    state ={toggled:false}

    handleClick=()=>{
        this.setState(previousState=>{
            return { toggled: !previousState.toggled
            }
          })
        }

    render(){
        return(
        <button onClick={this.handleClick}>Click me!{this.state.toggled?'On':'Off'}</button>
        )
    }
}

export default LightSwitch