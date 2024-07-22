import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Donate from './components/Donate';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Donate />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
