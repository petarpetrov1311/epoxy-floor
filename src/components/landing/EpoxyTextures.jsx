import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const textures = [
  {
    name: 'Епоксидна настилка',
    image: '/images/textures/epoxy-texture-1.avif',
  },
  {
    name: 'Полиуретан-цимент',
    image: '/images/textures/epoxy-texture-2.avif',
  },
  {
    name: 'Настилка от кварцов пясък',
    image: '/images/textures/epoxy-texture-3.avif',
  },
  {
    name: 'Каменен килим',
    image: '/images/textures/epoxy-texture-4.avif',
  },
  {
    name: 'Хидроизолации',
    image: '/images/textures/epoxy-texture-5.avif',
  },
  {
    name: 'Texture 6',
    image: '/images/textures/epoxy-texture-6.avif',
  },
];

export default function EpoxyTextures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-10 md:py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Текстури на епоксидни подове
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 md:mb-5" />
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            Разгледайте примерни повърхности и цветови комбинации за декоративни и индустриални настилки.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-10 md:gap-y-10 max-w-4xl mx-auto">
          {textures.map((texture, index) => {
            const active = selected === index;

            return (
              <motion.button
                key={texture.name}
                type="button"
                onClick={() => setSelected(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-3 focus:outline-none"
                aria-pressed={active}
              >
                <span
                  className={`relative block aspect-square w-full max-w-[180px] rounded-full p-1 transition-all duration-300 ${
                    active
                      ? 'bg-primary shadow-[0_18px_38px_rgba(245,166,35,0.28)]'
                      : 'bg-white shadow-[0_14px_34px_rgba(15,23,42,0.16)] group-hover:shadow-[0_18px_42px_rgba(15,23,42,0.22)]'
                  }`}
                >
                  <span
                    className="absolute inset-1 rounded-full opacity-0 ring-4 ring-primary/15 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span
                    className="relative block h-full w-full overflow-hidden rounded-full border border-white/80 transition-transform duration-300 group-hover:scale-[1.04]"
                  >
                    <img
                      src={texture.image}
                      alt={texture.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_34%_22%,rgba(255,255,255,0.42),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.18))]" />
                    <span className="absolute inset-[16%] rounded-full border border-white/20" />
                  </span>
                </span>
                <span
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    active ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}
                >
                  {texture.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
