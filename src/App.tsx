import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <About />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;