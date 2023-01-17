import React from "react";
import Login from "./Login";

var isLoggedin = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();



function App() {
  return <div className="container">{
  
    {/* isLoggedin === true ? <h1>Hello</h1> : <Login /> */}
  
    currentTime > 12 ? <h1>Why are you still working?</h1> :null

  }</div>;
}

export default App;
