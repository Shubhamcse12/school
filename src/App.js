// App.js
import React from "react";
import'./App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <Router>
      <Header className="back"/>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admission" element={<Admission />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="footer">
          <div className="section">
            <h1>Know More</h1>
            <h3>ABOUT US</h3>
            <h3>FACILITIE</h3>
            <h3>FAQs</h3>
            <h3>CONTACT Us</h3> 
          </div>
          <div className="section">
            <h1>Links</h1>
            <h3>FORMS</h3>
            <h3>PROCEDURES</h3>
            <h3>COURSES</h3>
            <h3>JOBS</h3>
          </div>
          <div className="section">
            <h1>Contact Us</h1>
            <h3>+91-8797147475</h3>
            <h3>contact@stxaviersjaynagar.in</h3>
            <h3>Divine Nagar, Near Petrol Pump, NH-105</h3>
            <h3>Jaynagar, Madhubani Dist.</h3>
            <h3>Bihar-847226</h3>
          </div>
          <div className="section">
            <h1>Numbers Don't Lie</h1>
            <h3>#1 Best in town</h3>
            <h3>100% Result</h3>
            <h3>30 Years of excellence</h3>
            <h3>FOLLOW US</h3>
          </div>
        </div>
        <div className="copy">
              <div className="line"></div>
              <div className="text">
              <p>© 2023, made with favorite by St. Xavier's family.</p>
              </div>
        </div>
    </Router>
  );
};

export default App;
