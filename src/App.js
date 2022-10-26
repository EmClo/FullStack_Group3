import Home from './pages/home/Home';
import About from './pages/about/About';
import Data from './pages/data/Data';
import Report from './pages/report/Report';
import Safety from './pages/safety/Safety';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <> 
    <NavBar />
    <div className="NavContainer">
     <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<Data />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/report" element={<Report />} />
      </Routes>
      </div>
      </>
  );
}

export default App;
