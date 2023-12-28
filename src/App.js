import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Section.scss";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
