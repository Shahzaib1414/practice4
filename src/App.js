import React, {useState} from 'react';
import {Message} from './Message';
import './App.css';

function App() {
  let [count, setcount] = useState(0);
  let [isMorning, setMorning] = useState(true)
  return (
   <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h2>Day Time ={isMorning ? 'Morning' : 'Night' } </h2>
      <Message counter= {count}/>
       <button onClick= {()=> setcount(++count)}> update count</button>
       <button onClick = {() => setMorning(!isMorning)}> update day </button>
    
    </div>
  );
}

export default App;
