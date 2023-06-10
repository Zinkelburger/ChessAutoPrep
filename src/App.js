import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Submit from "./pages/Submit";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        {/* LINKS  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;