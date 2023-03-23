import React from 'react'

export default function Result(props) {

  return (
    <div style={{marginLeft:20, marginTop:100, border:"1px solid #bbb", padding:10}}>
      <h3>Result : <u><b> {props.result.toString()} </b></u></h3>
    </div>
  )
}
