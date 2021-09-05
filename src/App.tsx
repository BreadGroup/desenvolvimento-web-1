import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyle from './styles/GlobalStyles';

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

import { ThemeName, themes } from './styles/themes';

function App() {
  const [ themeName, setThemeName ] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={ currentTheme }>
      <BrowserRouter>
        <GlobalStyle />

        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>

        {/* <Footer /> */}

      </ BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
