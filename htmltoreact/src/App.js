import "./styles/styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Recipes from "./pages/Recipes";
import PopularCooks from "./pages/PopularCooks";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="PopularCooks" element={<PopularCooks />} />
      </Routes>
    </div>
  );
}

export default App;
