import React, { useState } from 'react';
import Constant from './Constant'
import MyArgs from './MyArgs'
import And from './And'
import Or from './Or'

          
// const And = () => <div>This is component B</div>;
// const Or = () => <div>This is component B</div>;

export default function Main (props) {
  let [addOpp, setAddOp] = useState(true);
  let [selectedP, setSelectedP] = useState('');
  let operation=null;
  if (props.op==="and"){
    operation="and";
  }else if(props.op==="or"){
    operation = "or";
  }

  const handleSelectionP = (event) => {
    setSelectedP(event.target.value);
  };

  return (addOpp &&
    <div style={{marginTop: 1, marginLeft:40}}>
      <select onChange={handleSelectionP}>
        <option value={''}>Select...</option>
        <option value={"A"}>Constant</option>
        <option value={"B"}>My-args</option>
        <option value={"C"}>And</option>
        <option value={"D"}>Or</option>
      </select>
      
      {selectedP === "A" && 
        <Constant args={props.args} 
                  setArgs={props.setArgs} 
                  result={props.result} 
                  setResult={props.setResult} 
                  op={operation}
        />}
      {selectedP === 'B' && <MyArgs 
          args={props.args} 
          setArgs={props.setArgs} 
          result={props.result} 
          setResult={props.setResult} 
          op={operation}
      />}
      {selectedP === 'C' && <And 
          args={props.args} 
          setArgs={props.setArgs} 
          result={props.result} 
          setResult={props.setResult}
          op={operation}
          />}
      {selectedP === 'D' && <Or 
          args={props.args} 
          setArgs={props.setArgs} 
          result={props.result} 
          setResult={props.setResult}
          op={operation}
      />}
      <button style={{backgroundColor:"rgb(46, 50, 94)",margin:5,borderColor:"white",color:"white"}} onClick={() => setAddOp(!addOpp) }>+ | -</button>


    </div>
  );
};

