import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Shop from './Shop';
import Team from './Team';
import ContuctUs from './ContuctUs';
import AboutProduct from './AboutProduct';

function App() {
  return ( 
<div>
<nav className="App">
      <Link to='/about' className='link'>about</Link>
      <Link to='/shop' className='link'>shop</Link>
      <Link to='/home' className='link'>home</Link>
      <Link to='/team' className='link'>team</Link>
      <Link to='/contuctUs' className='link'>contuct us</Link>
    </nav>

    <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/team' element={<Team/>}/>
      <Route path='/contuctus' element={<ContuctUs/>}/>
      <Route path='/aboutProduct/:title' element={<AboutProduct/>}/>
    </Routes>
</div>


  );
}

export default App;
