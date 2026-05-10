import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    title: 'Хранително-вкусова промишленост',
    description: 'Месопреработка, млекопреработка, хлебарство и сладкарство, производство на напитки. Продуктите са в пълно съответствие с изискванията НАССР.',
    href: '/nastilki/hranitelno-vkusova',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    title: 'Производства и складове',
    description: 'За всякакъв вид производствена и складова дейност. Тежки, индустриални, химично и топлоустойчиви подове за всяка индустрия.',
    href: '/nastilki/proizvodstva-i-skladove',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    title: 'Паркинги и гаражи',
    description: 'Настилките лесно се почистват, не се хлъзгат и са устойчиви на масло и петролни продукти. Полагаме и маркировки в неограничена цветова гама.',
    href: '/nastilki/parking-i-garaji',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    title: 'Тераси и хидроизолации',
    description: 'Гумирана хидроизолационна система за открити площи. Устойчива на големи амплитудни различия и атмосферни влияния.',
    href: '/nastilki/terasi-i-hidroizolacii',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
    title: 'Декоративни настилки',
    description: 'Подходящи за офиси, магазини, заведения, ресторанти, хотели, аптеки, домове, вили и телевизионни студия. Богата палитра от цветове.',
    href: '/nastilki/dekorativni',
  },
  {
    image: 'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
    title: 'Многослойни епоксидни настилки',
    description: 'Многослойна безфугова настилка от епоксидна смола с висока механична здравина, химическа устойчивост и дълъг експлоатационен живот.',
    href: '/nastilki/mnogoslojni',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      {/* Mobile: compact horizontal card */}
      <Link to={service.href} className="md:hidden flex items-center gap-3 bg-white rounded-lg overflow-hidden shadow-sm border border-border p-3 hover:border-primary/50 transition-all duration-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-16 h-16 object-cover rounded flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
        </div>
        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
      </Link>

      {/* Desktop: full card */}
      <div className="hidden md:block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-border h-full">
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
          <Link
            to={service.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            Повече информация
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-10 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            ПОДОВИ НАСТИЛКИ С РАЗЛИЧНО ПРЕДНАЗНАЧЕНИЕ
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 md:mb-5" />
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed hidden md:block">
            EPOXY FLOORS предлага широка гама от подови настилки за различни производства,
            обществени сгради и домове. Продуктите се отличават с високо качество,
            устойчивост и разнообразие от цветове и материали.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}