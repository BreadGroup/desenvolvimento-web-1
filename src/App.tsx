import Box from '@mui/material/Box';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from 'components/Header';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
