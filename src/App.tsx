import React from 'react';
import './App.css';
import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.components";
import Footer from './components/Footer/Footer.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launches from './components/Launches/Launches.component';
import LaunchDetails from './components/LaunchDetails/LaunchDetails.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launches/>}/>
          <Route path="/launch/:id" element={<LaunchDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
