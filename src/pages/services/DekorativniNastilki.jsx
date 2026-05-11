import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Декоративни настилки',
  image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
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
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
  ],
  image2: 'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
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