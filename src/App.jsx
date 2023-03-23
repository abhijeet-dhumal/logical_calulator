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
    <div style={{padding:40, border : '1px solid #aaa'}}>
    <h3>User defined Arguments </h3>
    <br/>
    <Arguments args={args} setArgs={setArgs}/> 
    <hr />
    <h3 style={{marginTop:35}}>Logical Calculator </h3>
    <Main args={args} setArgs={setArgs} result={result} setResult={setResult} op={null}/> 
    <Result result={result} setResult={setResult}/>
    
    <div class="container" style={{marginTop:30}}>
        <hr /><br/>
        <span><i>created by</i> '<b>Abhijeet Dhumal</b>'</span>
    </div>
    <br />
    </div>
  );
}

export default App;
