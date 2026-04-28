import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Хранително-вкусова промишленост', href: '/nastilki/hranitelno-vkusova' },
  { label: 'Производства и складове', href: '/nastilki/proizvodstva-i-skladove' },
  { label: 'Паркинги и гаражи', href: '/nastilki/parking-i-garaji' },
  { label: 'Тераси и хидроизолации', href: '/nastilki/terasi-i-hidroizolacii' },
  { label: 'Декоративни настилки', href: '/nastilki/dekorativni' },
  { label: 'Многослойни епоксидни настилки', href: '/nastilki/mnogoslojni' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-navy text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+359898512776" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            +359 898 512 776
          </a>
          <a href="mailto:epoxy_fl@abv.bg" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3 h-3" />
            epoxy_fl@abv.bg
          </a>
        </div>
        <span className="text-white/60">Индустриални и декоративни подови настилки</span>
      </div>

      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg bg-white/98 backdrop-blur-sm' : 'bg-white'
        } border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="https://media.base44.com/images/public/69e3896dcda9941206a8adc2/516f7defa_ChatGPTImage2804202622_41_49.png"
                    alt="Epoxy Floors Logo"
                    className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">EF</span>
                </div>
                <div>
                  <div className="font-bold text-foreground leading-tight text-sm">EPOXY FLOORS</div>
                  <div className="text-[10px] text-muted-foreground">Индустриални и декоративни настилки</div>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#hero" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">Начало</a>

              {/* Настилки dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  Настилки
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white border border-border rounded-lg shadow-xl z-50 py-2"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">Проекти</a>
              <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">За нас</a>
              <a href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">Контакти</a>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2.5 text-sm font-semibold rounded hover:bg-primary/90 transition-all duration-200 shadow-sm"
              >
                Заяви Оферта
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                <a href="/#hero" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary font-medium transition-colors">Начало</a>

                {/* Mobile services dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary font-medium transition-colors"
                  >
                    Настилки
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary/30">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/#projects" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary font-medium transition-colors">Проекти</a>
                <a href="/#about" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary font-medium transition-colors">За нас</a>
                <a href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary font-medium transition-colors">Контакти</a>

                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 text-sm font-semibold rounded mt-2"
                >
                  Заяви Оферта
                </a>
                <div className="pt-3 border-t border-border space-y-2">
                  <a href="tel:+359898512776" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    +359 898 512 776
                  </a>
                  <a href="mailto:epoxy_fl@abv.bg" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    epoxy_fl@abv.bg
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}