import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Navbar from './pages/nav';
import NewContact from './pages/NewContact';
import ContactEdit from './pages/ContactEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/contacts' element={<Contacts /> } />
          <Route path='/contacts/new' element={<NewContact /> } />
          <Route path='/contact/edit' element={<ContactEdit /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
