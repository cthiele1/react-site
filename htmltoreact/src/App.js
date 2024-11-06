import "./styles/styles.css";
import "./styles/about.css";
import "./styles/recipes.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Recipes from "./pages/Recipes";
import PopularCooks from "./pages/PopularCooks";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="PopularCooks" element={<PopularCooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
