// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component{
    // we use the constructor to set the INITIAL STATE
    constructor(props) { 
        super()
        this.state = { 
          secondLeft: props.initialCount
        }
      } 
      render (){
          if (this.state.secondLeft ===0){
              return <h1>Bomb!</h1>
          }
          else {
              return <h1>{this.state.secondLeft} seconds left before I go boom!</h1>
          }

      }
}