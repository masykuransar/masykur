import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang', path: '/about' },
    { label: 'Artikel', path: '/blog' },
    { label: 'Manfaat', path: '/benefits' },
    { label: 'Kontak', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#112215]/95 backdrop-blur-md border-b border-border-dark">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="size-8 text-primary transition-transform group-hover:scale-110">
             <span className="material-symbols-outlined text-[32px]">landscape</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight">Geo-EWS</h2>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary font-bold' : 'text-white/80 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
           <button className="flex items-center justify-center rounded-lg size-10 bg-surface-dark border border-border-dark hover:border-primary/50 text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-background-dark text-sm font-bold py-2 px-5 rounded-lg transition-colors">
            <span>Masuk</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-dark bg-[#112215] p-4 absolute w-full shadow-xl animate-fade-in-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors px-2 py-1 rounded ${
                    isActive ? 'text-primary bg-surface-dark' : 'text-white hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="h-px bg-border-dark my-2"></div>
             <button className="w-full bg-primary hover:bg-primary-hover text-background-dark text-sm font-bold py-3 rounded-lg transition-colors">
              Masuk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;