import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Events from "./pages/Events";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        {/* LINKS  */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/submit" component={Submit} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;