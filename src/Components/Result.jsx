import React from 'react'

export default function Result(props) {
  let result;
  if(props.result===true){
    result='True';
  }else if(props.result===false){
    result='False';
  }else{
    result='Undefined';
  }

  return (
    <div style={{width:'100%',
    display:'flex',
    justifyContent:'center', border:"1px solid #bbb", padding:10}}>
      <h4>Result : <u><b> {result} </b></u></h4>
    </div>
  )
}