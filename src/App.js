import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar  />
        <div className="container">
          <Routes>
             <Route exact path="/about" element={<About />} />
             <Route exact path="/" element={<Textform heading="Enter your text to analyze" />}  /> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
