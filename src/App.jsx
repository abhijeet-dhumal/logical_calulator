import { useState } from "react";
import "./App.css";
import Arguments from "./Components/Arguments";
import Menu from "./Components/Menu";
import Result from "./Components/Result";

function App() {
  let [result, setResult] = useState(true);
  let [args, setArgs] = useState([
    {
      arg: "",
      value: false,
    },
  ]);

  return (
    <div
      style={{
        padding: 40,
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        border: "1px solid #aaa",
        backgroundColor: "#213547",
      }}
    >
      {/* <h4>User defined Arguments </h4> */}
      <br />
      <Arguments args={args} setArgs={setArgs} />
      <hr />
      {/* <h4 style={{ marginTop: '1vh' }}>Logical Calculator </h4> */}
      <Menu
        args={args}
        setArgs={setArgs}
        result={result}
        setResult={setResult}
        op={null}
      />
      <br/>
      <hr/>
      <Result result={result} setResult={setResult} />

      <div className="container">
        <hr />
        <span>
          <i>created by</i> '<b>Abhijeet Dhumal</b>'
        </span>
      </div>
      <br />
    </div>
  );
}

export default App;
