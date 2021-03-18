import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafar', 'Alamgir', 'Salman Shah', 'Shahrukh Khan'];
  const products = [
    {name: 'Photoshop', price: '19.99$'},
    {name: 'Illustrator', price: '19.99$'},
    {name: 'PDF Reader', price: '19.99$'},
    {name: 'Premiere El', price: '19.99$'},
  ];

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
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        {
          nayoks.map(nayok => <Person name={nayok}></Person>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json)
  //   .then(data => setUsers(data));
  // }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    if(count > 0){
      const newCount = count - 1;
      setCount(newCount);
    }
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
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
