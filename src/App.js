import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Animate from './components/Animate';
import NewAnimate from './components/NewAnimate';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {

  


  return (

    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/footer' element={<Footer/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/animate' element={<Animate/>}></Route>
          <Route path='/' element={<NewAnimate/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>

  )
}

export default App