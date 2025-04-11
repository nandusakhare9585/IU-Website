import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from "./about/page";
import Home from "./home/page";
import Header from "./components/Header";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/"  element={<Home />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       

      </Routes>
  </BrowserRouter>,
      
   
    </div>
  );
}

export default App;
