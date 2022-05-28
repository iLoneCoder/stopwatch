import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Application from "./pages/Application";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return <div className="webPage">

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/application/:appName" element={<Application />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </div>
}

export default App;
