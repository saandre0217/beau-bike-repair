import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intake } from './Pages/Intake';
import { Admin } from './Pages/Admin';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<Intake />} />
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
