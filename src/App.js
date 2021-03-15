import logo from './logo.svg';
import './App.css';


function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: 'Singer'
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Heading: {(2+3)*5-222+25555}</h1>
        <h2 style={style}>Name: {person.name}</h2>
        <h2 style={{backgroundColor: 'cyan', color: 'tomato'}}>Occupation: {person.job}</h2>
        <p>My first React Paragraph</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return (
  <div style={{border: "2px solid yellow", margin: '10px'}}>
    <h1>Name: Sakib Khan</h1>
    <h2>I love him a lot...</h2>
  </div>
  );
}

export default App;
