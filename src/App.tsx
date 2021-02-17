import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
