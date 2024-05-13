import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intake } from './Pages/Intake';
import { Login } from './Pages/Login';
import { Admin } from './Pages/Admin';
import PrivateRoutes from './Components/privateRoutes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<Intake />} />
          <Route path='/login' element={<Login />}/>
          <Route element={<PrivateRoutes />}>
            <Route path='/admin' element={<Admin />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
