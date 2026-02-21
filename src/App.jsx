import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  library.add(faInstagram, faFacebook, faTwitter, faLinkedin);
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
