import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
