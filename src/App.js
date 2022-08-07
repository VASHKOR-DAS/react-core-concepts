/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Mark Zukar", "Steve Jobs", "Shiv"]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* <Person name="Mark Zukar" discovered="Facebook"></Person>
          <Person name="Steve Jobs" discovered="Apple"></Person>
          <Person name="Shiv" discovered="Haven"></Person> */}

          {/* read data from array */}
          <Person name={names[0]} discovered="Facebook"></Person>
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
    </div>
  )
}


export default App; 