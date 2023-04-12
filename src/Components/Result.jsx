import React,{ useEffect, useState } from 'react'

export default function Result(props) {
  let [result,setResult]=useState('')
  useEffect(()=>{
    if(props.result===true){
      setResult('True');
    }else if(props.result===false){
      setResult('False');
    }else{
      setResult('Undefined');
    }
  },[props.result])
  

  return (
    <div style={{width:'100%',
    display:'flex',
    justifyContent:'center', border:"1px solid #bbb", padding:10}}>
      <h4>Result : <u><b> {result} </b></u></h4>
    </div>
  )
}