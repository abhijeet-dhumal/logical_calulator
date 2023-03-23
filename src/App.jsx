import { useState } from "react";
import "./App.css";
import Arguments from './Components/Arguments'
import Main from './Components/Main'
import Result from './Components/Result'

function App() {
  let [result, setResult] = useState(true);
  let [args, setArgs] = useState([
    {
      arg: '',
      value: false,
    },
  ]);

  return (
    <>
    <h3>User defined Arguments </h3>
    <br/>
    <Arguments args={args} setArgs={setArgs}/> 
    <hr />
    <h3 style={{marginTop:35}}>Logical Calculator </h3>
    <Main args={args} setArgs={setArgs} result={result} setResult={setResult} op={null}/> 
    <Result result={result} setResult={setResult}/>
    <br />
    </>
  );
}

export default App;
