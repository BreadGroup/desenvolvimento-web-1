import { HashRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export function App() {
  return (
    <HashRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
