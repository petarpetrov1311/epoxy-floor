import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Начало', href: '#hero' },
  { label: 'Настилки', href: '#services' },
  { label: 'Проекти', href: '#projects' },
  { label: 'За нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
                src="https://www.epoxy-fl.com/wp-content/uploads/2022/11/logo-blue.png"
                    alt="Epoxy Floors Logo"
                    className="h-12 w-auto object-contain"
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
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
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
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