import { useState } from "react";
import "../App.css";
import Arguments from "./Arguments";
import Menu from "./Menu";
import Result from "./Result";
import About from "./About";
function App() {
  let [showAbout, setShowAbout] = useState(false);
  let [result, setResult] = useState(null);
  let [args, setArgs] = useState([
    {
      arg: "",
      value: false,
    },
  ]);
  
  function aboutData() {
    setShowAbout(!showAbout);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "15px",
      }}
    >
      <div className="mx-3"
        style={{
          padding: 40,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "5px solid #aaa",
          borderRadius: "15px",
          backgroundColor: "#213547",
        }}
      >
        <h4>Logical Operators</h4>
        <hr />
        <p>User defined Arguments </p>
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
        <br />
        <hr />
        <Result result={result} setResult={setResult} />

        <div className="container">
          <br />
          <p onClick={aboutData}>
            <u>About</u>
          </p>
          <hr />
          <span>
            <i>created by</i> '<b>Abhijeet Dhumal</b>'
          </span>
        </div>
        <br />
      </div>
      {showAbout && <About />}
    </div>
  );
}

export default App;
