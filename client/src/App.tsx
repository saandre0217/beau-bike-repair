import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intake } from './Pages/Form';
import { Login } from './Pages/Login';
import { Admin } from './Pages/Admin';
import PrivateRoutes from './Components/privateRoutes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';

axios.defaults.baseURL = 'https://bbr-server.azurewebsites.net';
//axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router basename='https://purple-rock-09633710f.5.azurestaticapps.net/'>
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
