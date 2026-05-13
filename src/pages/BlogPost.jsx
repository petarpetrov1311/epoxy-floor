import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { blogPosts } from '../data/blogs';

export default function BlogPost() {
  const { blogSlug } = useParams();
  const post = blogPosts.find((item) => item.slug === blogSlug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-inter">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Статията не е намерена</h1>
          <Link to="/blogove" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Назад към блогове
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-navy">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <Link
                to="/blogove"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Всички блогове
              </Link>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
                  <Clock className="h-4 w-4 text-primary" />
                  {post.readTime} четене
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{post.excerpt}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <article className="max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-lg border border-border bg-white p-6 shadow-sm md:p-10"
            >
              <div className="mb-8 h-1 w-16 bg-primary" />
              <div className="space-y-6">
                {post.content.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted-foreground md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
