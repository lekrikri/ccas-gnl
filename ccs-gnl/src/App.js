import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './components/Home';
import SignIn from './pages/form/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<SignIn />} exact />
       <Route path='/ResponsiveDrawer' element={<ResponsiveDrawer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;