import AboutMe from "./components/about_me/AboutMe";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <AboutMe />
      <div style={{ height: 500, width: "100%" }}></div>
    </div>
  );
}

export default App;
