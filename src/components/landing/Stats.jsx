import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 1900, suffix: '+', label: 'Доволни клиенти' },
  { value: 80000, suffix: '+', label: 'Положени кв.м.' },
  { value: 1200, suffix: '+', label: 'Изпълнени обекта' },
  { value: 80, suffix: '', label: 'Цветови гами' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString('bg-BG')}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="py-6"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              <div className="mt-2 text-sm text-white/70 font-medium">{stat.label}</div>
              <div className="mt-3 w-10 h-0.5 bg-primary/60 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}