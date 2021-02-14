import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
