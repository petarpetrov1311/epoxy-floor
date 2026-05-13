import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Декоративни настилки',
  image: '/images/projects/about-us2.jpg',
  description: `Декоративните епоксидни настилки съчетават висока функционалност с изключителен естетичен вид. Подходящи са за офиси, магазини, заведения, ресторанти, хотели, аптеки, домове, вили и телевизионни студия. Богата палитра от цветове и завършвания.`,
  points: [
    'Богата цветова палитра',
    'Различни завършвания — мат, сатен, гланц',
    'Лесно почистване и поддръжка',
    'Подходящи за жилищни и търговски обекти',
    'Висока химическа устойчивост',
    'Безшевна, хигиенична повърхност',
  ],
  gallery: [
    '/images/projects/about-us2.jpg',
    '/images/projects/img-3147-1-scaled.jpeg',
    '/images/projects/about-us1.jpg',
    '/images/projects/oborudvane1.jpg',
    '/images/projects/oborudvane2.jpg',
  ],
  image2: '/images/projects/img-3147-1-scaled.jpeg',
  description2: 'Декоративните ни настилки са достъпни в над 80 цветови гами и различни ефекти на повърхността — от матово до интензивен гланц. Нашите дизайнери могат да разработят индивидуален проект съобразен с интериора на всеки обект, осигурявайки уникален и завършен вид.',
};

export default function DekorativniNastilki() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}