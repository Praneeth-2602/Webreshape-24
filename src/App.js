import React from 'react';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import Signup from './screens/SignUp.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
