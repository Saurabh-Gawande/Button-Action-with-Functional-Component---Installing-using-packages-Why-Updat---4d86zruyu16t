import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
 const [text , useText] = useState("");
 function fun(){
  
  useText (
    <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
  );
 }
  return (
    <div id="main">
      <button id="click" onClick={fun}>click</button>
      {text}
    </div>
  );
}


export default App;







