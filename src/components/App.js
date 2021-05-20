import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 

  const [getCounter, setCounter] = useState();

  useEffect( () => {
     if(getCounter>0){
       setTimeout(() => setCounter(getCounter-1), 1000);
     }
    
  }) ;

  const callerKey = (e) => {
    if(e.key==="Enter"){
    setCounter(Math.floor(e.target.value));
    }
  }
  
  return (
    <div className="wrapper">
       <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={callerKey} /> sec.
        </h1>
      </div>
      <div id="current-time">{ getCounter } </div> 

      {/* <input onKeyDown= {callerKey}/>
     {getCounter} */}


    </div>
  )
}


export default App;
