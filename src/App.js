import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Herosection />
      <Projects />
      <About />
    </div>
  );
}

export default App;
