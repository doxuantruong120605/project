
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compoments/Navbar';
import Home from './pages/Home';
import Footer from './compoments/Footer'
import Athletes from './pages/Athletes';
import Lets_move from './pages/Lets_move';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="Athletes" element ={<Athletes />} />
      <Route path="Let_move" element ={<Lets_move />}/>
    </Routes>
      <Footer/>
  </Router>
    </div>
  );
}

export default App;
