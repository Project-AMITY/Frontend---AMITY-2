import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Opportunities from "./pages/Opportunities";
import Organisers from "./pages/Organisers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventDetails from "./pages/EventDetails";
import OrgReg from "./pages/OrgRegister";
import UserProfile from "./pages/UserProfile";
import OrganiserProfile from "./pages/OrgProfile";
import CreateNewEvent from "./pages/CreateNewEvents";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/organisers" element={<Organisers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event/:id" element={<EventDetails/>} />
          <Route path="/organisers/login" element={<OrgReg/>} />
          <Route path="/user/profile" element={<UserProfile/>} />
          <Route path="/organiser/profile" element={<OrganiserProfile/>} />
          <Route path="/organiser/create" element={<CreateNewEvent/>} />
          <Route path="/register/orgreg" element={<OrgReg/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;