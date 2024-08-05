import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import PlotAvailabilty from './pages/PlotAvailabilty';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './component/Footer';






function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/plt" element={<PlotAvailabilty/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    
  );
}

export default App;
