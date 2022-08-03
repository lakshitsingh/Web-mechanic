import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/services/Services.js';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Training from './components/pages/services/Training';
import Webdevlopement from './components/pages/services/Webdevlopement';
import DigitalMarking from './components/pages/services/DigitalMarking';
import MobileAppilication from './components/pages/services/MobileAppilication';
import Login from './components/pages/auth/Login';
import Logout from './components/pages/auth/Logout';
import Privacy from './components/pages/auth/Privacy';
import Terms from './components/pages/auth/Terms';

//Import redux store
import {Provider} from "react-redux"
import store from './store/store'


function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
        <Route path="/webdev" element={<Webdevlopement />} />
        <Route path="/digitalmarketing" element={<DigitalMarking />} />
        <Route path="/mobileapp" element={<MobileAppilication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
