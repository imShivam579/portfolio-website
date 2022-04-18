import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Herosection />
      <Projects />
    </div>
  );
}

export default App;
