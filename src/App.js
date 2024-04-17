import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Drivers from './components/Drivers';
import Races from './components/Races';
import RaceDetail from './components/RaceDetail';
import DriverDetail from './components/DriverDetail'; // Make sure to import the component

import './App.css';
import './index.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
  <Route path="/drivers/:season" element={<Drivers />} />
  <Route path="/races/:year" element={<Races />} />
  <Route path="/race/:season/:round" element={<RaceDetail />} />
  <Route path="/driver-details/:driverId" element={<DriverDetail />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;
