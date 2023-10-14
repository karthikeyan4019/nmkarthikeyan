// src/App.js
import React from 'react';
import Header from './components/Header';
import MyForm from './components/MyForm';
import Footer from './components/Footer';
import './App.css'; // You can add global styles here

function App() {
  return (
    <div className="app-container">
      <Header />
      <MyForm />
      <Footer />
    </div>
  );
}

export default App;
