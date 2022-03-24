import React from 'react';
import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Main';
import LoginForm from './components/login/LoginForm';

function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<LoginForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
