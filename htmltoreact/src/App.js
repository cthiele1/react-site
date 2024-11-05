import "./styles/styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Recipes from "./pages/Recipes";
import PopularCooks from "./pages/PopularCooks";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
