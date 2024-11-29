import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-brand-accent/30 mix-blend-multiply"></div>
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-800 border border-brand-primary/30">
              <span className="text-brand-light font-medium">Advanced Security Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
              Simplifying Security and Access
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional installation of security systems, access control, and public addressing systems
            </p>
            <div className="space-x-4">
            <a href="#contact">
              <button className="bg-brand-primary text-white px-8 py-3 rounded-md hover:bg-brand-secondary transition-colors">
                Get Started
              </button>
            </a>
              {/*<button className="bg-gray-800 text-white px-8 py-3 rounded-md border border-brand-primary/30 hover:border-brand-primary transition-colors">
                Learn More
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}