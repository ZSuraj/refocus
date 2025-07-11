import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import WhyDifferent from './components/WhyDifferent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-teal-50">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="who-its-for">
        <WhoItsFor />
      </div>
      <div id="why-different">
        <WhyDifferent />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;