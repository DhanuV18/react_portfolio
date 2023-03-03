import React from 'react';

import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.scss'

import Header from './container/Header/Header'
import './container/Header/Header.scss'

import About from './container/About/About'
import './container/About/About.scss';

// import './App.scss';
// import Skills from './container/Skills/Skills';

// import Work from './container/Work/Work';
// import './container/Work/Work.scss'

// import Footer from './container/Footer/Footer';
// import './container/Footer/Footer.scss'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      {/* <About />  */}
      {/* <Skills /> 
      <Work />
      <Footer />       */}
    </div>

  );
}

export default App;
