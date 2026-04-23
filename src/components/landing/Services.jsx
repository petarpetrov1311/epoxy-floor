import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    title: 'Хранително-вкусова промишленост',
    description: 'Месопреработка, млекопреработка, хлебарство и сладкарство, производство на напитки. Продуктите са в пълно съответствие с изискванията НАССР.',
    href: '#contact',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    title: 'Производства и складове',
    description: 'За всякакъв вид производствена и складова дейност. Тежки, индустриални, химично и топлоустойчиви подове за всяка индустрия.',
    href: '#contact',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    title: 'Паркинги и гаражи',
    description: 'Настилките лесно се почистват, не се хлъзгат и са устойчиви на масло и петролни продукти. Полагаме и маркировки в неограничена цветова гама.',
    href: '#contact',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    title: 'Тераси и хидроизолации',
    description: 'Гумирана хидроизолационна система за открити площи. Устойчива на големи амплитудни различия и атмосферни влияния.',
    href: '#contact',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
    title: 'Декоративни настилки',
    description: 'Подходящи за офиси, магазини, заведения, ресторанти, хотели, аптеки, домове, вили и телевизионни студия. Богата палитра от цветове.',
    href: '#contact',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
    title: 'Многослойни епоксидни настилки',
    description: 'Многослойна безфугова настилка от епоксидна смола с висока механична здравина, химическа устойчивост и дълъг експлоатационен живот.',
    href: '#contact',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-border"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {service.description}
        </p>
        <a
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
        >
          Повече информация
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ПОДОВИ НАСТИЛКИ С РАЗЛИЧНО ПРЕДНАЗНАЧЕНИЕ
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-5" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            EPOXY FLOORS предлага широка гама от подови настилки за различни производства,
            обществени сгради и домове. Продуктите се отличават с високо качество,
            устойчивост и разнообразие от цветове и материали.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}