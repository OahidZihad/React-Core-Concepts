import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks = ['Anwar', 'Jafar', 'Alamgir', 'Salman Shah'];
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
        <Person name={nayoks[0]} nayika="Deepika"></Person>
        <Person name={nayoks[2]} nayika="Shabana"></Person>
        <Person name="Bapparaj" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
  <div style={{border: "2px solid yellow", margin: '10px'}}>
    <h1>Nayok: {props.name}</h1>
    <h1>Nayika: {props.nayika}</h1>
    <h2>I love him a lot...</h2>
  </div>
  );
}

export default App;
