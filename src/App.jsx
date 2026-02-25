import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import ContactUs from "./Pages/ContactUs";

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin);
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
