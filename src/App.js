import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tech101 from "./pages/Tech101";
import Computer from "./pages/Computer";
import Television from "./pages/Television";
import Smartphone from "./pages/Smartphone";
import Internet from "./pages/Internet";
import Streaming from "./pages/Streaming";
import Wearable from "./pages/Wearable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* add home to the below path="/" to force the homepage at /home */}
            <Route path="/" element={<Home />} />
            <Route path="/tech101" element={<Tech101 />} />
            <Route path="/computer" element={<Computer />} />
            <Route path="/television" element={<Television />} />
            <Route path="/smartphone" element={<Smartphone />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/wearable" element={<Wearable />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
