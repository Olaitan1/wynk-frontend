import React from 'react';
import { Route, Routes } from 'react-router-dom'  
import Signup from './pages/signUp/signup';
import Login from './pages/Login/login';
import Deposit from './components/deposit/deposit';

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Deposit />} />
      </Routes>
    </>
   
      
  );
};
export default App;
