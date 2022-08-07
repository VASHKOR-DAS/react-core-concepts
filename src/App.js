/* eslint-disable no-undef */
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const names = ["Mark Zukar", "Steve Jobs", "Shiv"]
  return (
    <div className="App">
      <header className="App-header">
        
        <MovieCounter></MovieCounter>
        
        <p>
          {/* <Person name="Mark Zukar" discovered="Facebook"></Person>
          <Person name="Steve Jobs" discovered="Apple"></Person>
          <Person name="Shiv" discovered="Haven"></Person> */}

          {/* read data from array */}
          <Person name={names[0]} discovered="Facebook" age="56"></Person>
          <Person name={names[1]} discovered="Apple"></Person>
          <Person name={names[2]} discovered="Haven"></Person>

        </p>
      </header>
    </div>
  );
}

function Person (props) {
  const personStyle={
    width : "600px",
    border: '2px solid red',
    margin : '20px',
    padding : '20px',
  }
  return (
    <div style={personStyle}>
    {/*
    ai vabeo tag er vitor style lekha jay 
    <div style={{border: '2px solid red',
    margin : '10px'}}> 
    */}

      {/* <h2>Name : {props.name}</h2>
      <h3>Discovered : {props.discovered}</h3> */}

      <h2>Name : {props.name}</h2>
      <h3>Discovered : {props.discovered}</h3>

      {/* age property onno kothao use na korle default value hisebe none bosiye */}
      <p>He has done it in {props.age || 'none'} years</p>
    </div>
  )
}

// MovieCounter er button a click korle er value 1 kore barbe, (0) is default value
function MovieCounter() {
  const [count, setCount] = useState(0);

  const handelClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handelClick}>Add Movie</button>
      <h5>Number of movies: {count}</h5>

      {/* MovieCounter component er vitor theke Discover component k call */}
      <Discover idea={count + 1}></Discover>
      <Discover idea={count + 2}></Discover>
      <Discover idea={count + 3}></Discover>
      <Discover idea={count + 4}></Discover>

    </div>
  )
}

// onno 1ti component o kono 1ti component er vitor theke pass korte pari
function Discover(props) {
  return (
    <h4>Discover in this year: {props.idea}</h4>
  )
}


export default App; 