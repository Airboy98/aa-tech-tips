import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Computer from "./pages/Computer";
import Television from "./pages/Television";
import Smartphone from "./pages/Smartphone";
import Internet from "./pages/Internet";
import Streaming from "./pages/Streaming";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <div className="container">
        <HashRouter>
          <Navbar />
          <Routes>
            {/* add home to the below path="/" to force the homepage at /home */}
            <Route path="/" element={<Home />} />
            <Route path="/computer" element={<Computer />} />
            <Route path="/television" element={<Television />} />
            <Route path="/smartphone" element={<Smartphone />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
