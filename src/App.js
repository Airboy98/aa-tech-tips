import Navbar from './components/Navbar'
import Home from './pages/Home'
import Computer from './pages/Computer'
import Television from './pages/Television'
import Smartphone from './pages/Smartphone'
import Internet from './pages/Internet'
import Streaming from './pages/Streaming'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/television" element={<Television />} />
        <Route path="/smartphone" element={<Smartphone />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/streaming" element={<Streaming />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
