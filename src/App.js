import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar title="TextChanger" homeText="Home" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
        <About />
      </div>
    </>
  );
}

export default App;
