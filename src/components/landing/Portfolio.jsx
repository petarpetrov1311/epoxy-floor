import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['Всички', 'Декоративни настилки', 'Паркинги и гаражи', 'Производства и складове', 'Тераси и хидроизолации'];

const projects = [
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    title: 'Производствен цех',
    category: 'Производства и складове',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    title: 'Хранително-вкусово производство',
    category: 'Производства и складове',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    title: 'Паркинг с маркировки',
    category: 'Паркинги и гаражи',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    title: 'Индустриален склад',
    category: 'Производства и складове',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
    title: 'Декоративна настилка — Офис',
    category: 'Декоративни настилки',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
    title: 'Многослойна епоксидна настилка',
    category: 'Декоративни настилки',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2024/01/%D0%BA%D1%8A%D1%89%D0%B0-%D0%B7%D0%B0-%D0%B3%D0%BE%D1%81%D1%82%D0%B8-1.jpg',
    title: 'Тераса — Хидроизолация',
    category: 'Тераси и хидроизолации',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    title: 'Химически устойчива настилка',
    category: 'Производства и складове',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Всички');
  const [lightboxImage, setLightboxImage] = useState(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' });

  const filtered = activeCategory === 'Всички'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Изпълнени проекти</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-5" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Разгледайте нашето портфолио и вижте част от нашите реализирани проекти в България и чужбина.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title + project.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-sm"
                onClick={() => setLightboxImage(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-primary font-semibold">{project.category}</span>
                  <h3 className="text-white font-semibold text-sm mt-1">{project.title}</h3>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-10">
          <button
            onClick={() => setActiveCategory('Всички')}
            className="inline-block border-2 border-primary text-primary px-8 py-3 font-semibold rounded hover:bg-primary hover:text-white transition-all duration-200"
          >
            Виж всички проекти
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4">
                <span className="text-primary text-xs font-semibold">{lightboxImage.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{lightboxImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}