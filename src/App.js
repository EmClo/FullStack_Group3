import Home from './Home';
import About from './About';
import Data from './Data';
import Report from './Report';
import Safety from './Safety';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

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
