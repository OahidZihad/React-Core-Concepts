import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafar', 'Alamgir', 'Salman Shah'];
  const products = [
    {name: 'Photoshop', price: '19.99$'},
    {name: 'Illustrator', price: '19.99$'},
    {name: 'PDF Reader', price: '19.99$'},
  ]
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
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={nayoks[0]} nayika="Deepika"></Person>
        <Person name={nayoks[2]} nayika="Shabana"></Person>
        <Person name="Bapparaj" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid green',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    height: '200px',
    width: '250px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.product;

  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props){
  return (
  <div style={{border: "2px solid yellow", margin: '10px'}}>
    <h1>Nayok: {props.name}</h1>
    <h1>Nayika: {props.nayika}</h1>
    <h2>I love him a lot...</h2>
  </div>
  );
}

export default App;
