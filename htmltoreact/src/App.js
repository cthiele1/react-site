import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./styles/styles.css";
import "./styles/about.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
