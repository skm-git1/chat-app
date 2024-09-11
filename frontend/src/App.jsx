// import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Login from './pages/login/Login.jsx';


function App() {
  

  return (
    <>
      <div className='p-4 h-screen items-center justify-center'>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/signup' element = {<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
