import React from 'react';
import './App.css';
import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.components";
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
