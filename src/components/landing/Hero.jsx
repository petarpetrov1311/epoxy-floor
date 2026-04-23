import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    category: 'Производства и складове',
    title: 'ПОДОВИ НАСТИЛКИ ЗА ИНДУСТРИЯТА',
    description: 'Изграждаме подови настилки за производствени помещения, халета, складове от лека, тежка и химическа промишленост.',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    category: 'Паркинги и гаражи',
    title: 'ПАРКИНГИ И ГАРАЖИ',
    description: 'Настилките лесно се почистват, не се хлъзгат и са устойчиви на масло и петролни продукти.',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    category: 'Декоративни настилки',
    title: 'ДЕКОРАТИВНИ ЕПОКСИДНИ НАСТИЛКИ',
    description: 'Подходящи за офиси, магазини, заведения, ресторанти, хотели, домове и много други.',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    category: 'Тераси и хидроизолации',
    title: 'ХИДРОИЗОЛАЦИИ',
    description: 'Гумирана хидроизолационна система за открити площи. Устойчива на големи амплитудни различия.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative h-[85vh] min-h-[550px] overflow-hidden bg-navy">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/65" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              {/* Logo centered on slide */}
              <div className="mb-6">
                <img
                  src="https://www.epoxy-fl.com/wp-content/uploads/2022/11/logo-white.png"
                  alt="Epoxy Floors"
                  className="h-16 w-auto object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              <div className="inline-block bg-primary/90 text-white text-xs font-semibold px-4 py-1.5 rounded mb-4 tracking-wide uppercase">
                Категория: {slides[current].category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                {slides[current].title}
              </h1>

              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-primary text-white px-8 py-3.5 font-semibold rounded hover:bg-primary/80 transition-all duration-200 flex items-center gap-2"
                >
                  Заявете Оферта
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="border-2 border-white/60 text-white px-8 py-3.5 font-semibold rounded hover:border-primary hover:text-primary transition-all duration-200"
                >
                  Видове Настилки
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-primary/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-primary/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}