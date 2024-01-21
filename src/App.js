
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compoments/Navbar';
import Home from './pages/Home';
import Footer from './compoments/Footer'
import Athletes from './pages/Athletes';
import Olympic_game from './pages/Olympic_game';
import Brisbane from './pages/Brisbane';
import La from './pages/La';
import Statistics from './pages/Statistics';
import Dakar from './pages/Dakar'
import History from './pages/History';
import Donovan_info from './compoments/Donovan_info';
import Leona_info from './compoments/Leona_info';
import Marco_info from './compoments/Marco_info';
import Mariah_info from './compoments/Mariah_info';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="Athletes" element ={<Athletes />} />
      <Route path="Olympic_game" element ={<Olympic_game />}/>
      <Route path="Brisbane" element ={<Brisbane />}/>
      <Route path="La" element ={<La />}/>
      <Route path="Statistics" element ={<Statistics />}/>
      <Route path="Dakar" element ={<Dakar />}/>
      <Route path="History"element={<History/>}/>
      <Route path="Donovan_info"element={<Donovan_info/>}/>
      <Route path="Leona_info" element={<Leona_info />}/>
      <Route path="Marco_info" element={<Marco_info/>}/>
      <Route path="Mariah_info" element={<Mariah_info/>}/>
    </Routes>
      <Footer/>
  </Router>
    </div>
  );
}

export default App;
