import './App.css';
import Section1 from './COMPONENT/SECTION1/Section1';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section2 from './COMPONENT/SECTION2/Section2';
import Section3 from './COMPONENT/SECTION3/Section3';
import Footer from './COMPONENT/FOOTER/Footer';

function App() {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <>

      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
