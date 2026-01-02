
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Opportunities from './pages/Opportunities'
import Organisers from './pages/Organisers'
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetails from './pages/EventDetails';


import OrgProfile from './pages/OrgProfile';
import OrgRegister from './pages/OrgRegister';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Opportunities/>}/>
          <Route path='/organisers' element={<Organisers/>}/>
          {/* <Route path='/organisers' element={<OrgProfile/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/register/orgreg'element={<OrgRegister/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
