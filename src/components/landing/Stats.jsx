import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Building2, Ruler } from 'lucide-react';

const stats = [
  { value: 20, suffix: '+ години', label: 'Професионален опит', icon: Award },
  { value: 80000, suffix: '+', label: 'Положени кв. м.', icon: Ruler },
  { value: 1200, suffix: '+', label: 'Изпълнени обекти', icon: Building2 },
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
    <section id="stats" className="bg-navy py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid gap-6 text-center sm:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative py-6"
              >
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/15 sm:block" />
                )}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-primary ring-1 ring-white/15">
                  <Icon className="h-6 w-6" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                <div className="mt-2 text-sm text-white/70 font-medium">{stat.label}</div>
                <div className="mt-3 w-10 h-0.5 bg-primary/60 mx-auto" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
