import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useState } from 'react';

function App() {
  const [cart, setCart]=useState([]);
  function handleClick(course){
    const newCart=[course, ...cart];
    console.log(newCart);
    setCart(newCart);
  }
  return (
    <div className="App">
      <Header cart={cart}></Header>
      <Courses handleClick={handleClick}></Courses>
    </div>
  );
}

export default App;
