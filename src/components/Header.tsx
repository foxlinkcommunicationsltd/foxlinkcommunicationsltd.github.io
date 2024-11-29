import React, { useEffect, useState } from 'react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-6xl mx-auto ${
        scrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className={`
        mx-4 px-6 py-4 
        bg-gray-900/70 backdrop-blur-lg
        border border-gray-800/50
        rounded-2xl
        shadow-lg shadow-black/10
        transition-all duration-300
        ${scrolled ? 'shadow-lg' : ''}
      `}>
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center">
            <nav className="mr-8">
              <div className="flex items-center space-x-1">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#products">Products</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </nav>
            
            {/*<button className="
              bg-brand-primary/90 hover:bg-brand-primary
              text-white font-medium
              px-6 py-2
              rounded-xl
              transition-all duration-300
              shadow-lg shadow-brand-primary/20
              hover:shadow-brand-primary/40
              hover:scale-105
            ">
              Get Quote
            </button>*/}
          </div>

          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            {/*}
            <button className="
              w-full mt-4
              bg-brand-primary/90 hover:bg-brand-primary
              text-white font-medium
              px-6 py-2
              rounded-xl
              transition-all duration-300
            ">
              Get Quote
            </button>
            */}
          </div>
        )}
      </div>
    </header>
  );
}