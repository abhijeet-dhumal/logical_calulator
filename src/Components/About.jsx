import React from 'react'

export default function About() {
  return (
    <div
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
            <div style={{width:'200px'}}>
      <h3>About</h3>
      <hr />
      <ul>
        <li style={{align:'justify'}}>Here you can create your own User Defined Arguments using DropDown option.</li>
        <hr/>
        <li>Main DropDown component consists of Constant/, MyArgs(UserDefined)/, And/ and Or/ options.</li>
        <hr/>
        <li>The related argument selections will be used to evalaute result accordingly. </li>
        <hr/>
        <li>The result will be displayed on the basis of logical operations among user selections.</li>
      </ul>
      </div>
    </div>
  )
}
