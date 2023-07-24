import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import Umkm from "./pages/Umkm";
import Footer from "./components/footer";
import Budaya from "./pages/Budaya";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agrowisata" element={<Agrowisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/budaya" element={<Budaya />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
