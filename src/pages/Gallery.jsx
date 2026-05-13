import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Images, X, ZoomIn } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { galleryCategories, galleryProjects } from '../data/gallery';

export default function Gallery() {
  const { categorySlug } = useParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  const activeCategory = galleryCategories.find((category) => category.slug === categorySlug);

  const photos = useMemo(() => {
    if (!activeCategory) return [];
    return galleryProjects.filter((project) => project.category === activeCategory.title);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main>
        <section className="bg-navy pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-primary">
                <Images className="h-4 w-4" />
                Галерия
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {activeCategory ? activeCategory.title : 'Галерия по категории'}
              </h1>
              <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
                {activeCategory
                  ? 'Разгледайте снимките от избраната категория изпълнени настилки.'
                  : 'Изберете категория и вижте примерни снимки от нашите изпълнени проекти.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {activeCategory ? (
              <>
                <Link
                  to="/galeria"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Всички категории
                </Link>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo, index) => (
                    <motion.button
                      key={photo.title + index}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      onClick={() => setLightboxImage(photo)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{photo.category}</p>
                        <h2 className="mt-1 text-lg font-bold text-white">{photo.title}</h2>
                      </div>
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ZoomIn className="h-5 w-5" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {galleryCategories.map((category, index) => (
                  <motion.article
                    key={category.slug}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link to={`/galeria/${category.slug}`} className="block">
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h2 className="text-lg font-bold text-foreground">{category.title}</h2>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                          Виж галерията
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              aria-label="Затвори"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[82vh] w-full rounded-lg object-contain"
              />
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{lightboxImage.category}</p>
                <h2 className="mt-1 text-xl font-bold text-white">{lightboxImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
