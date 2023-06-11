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
import GenerateFENsPage from "./pages/GenerateFENsPage";
import NotFound from "./pages/NotFound";

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
          <Route path="/generate" element={<GenerateFENsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;