// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Person></Person>
          <Person></Person>
          <Person></Person>
        </p>
      </header>
    </div>
  );
}

function Person () {
  const personStyle={
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

      <h1>Name : Joya Das</h1>
      <h3>Mother of the year</h3>
    </div>
  )
}



export default App;
