import React from 'react';
import Footer from '../../components/landing/Footer';
import Navbar from '../../components/landing/Navbar';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Игрища и спортни съоръжения',
  image: '/images/projects/parking.jpg',
  description: 'Специализирани настилки за спортни зони, игрища и съоръжения, при които са важни сцепление, устойчивост и безопасност при движение.',
  points: [
    'Подходящи за спортни и обществени площи',
    'Добро сцепление и безопасност',
    'Устойчивост на интензивна употреба',
    'Възможност за цветно оформление и маркировки',
    'Лесно почистване',
    'Изпълнение според натоварването на обекта',
  ],
  gallery: [
    '/images/projects/parking.jpg',
    '/images/projects/oborudvane1.jpg',
    '/images/projects/oborudvane2.jpg',
    '/images/projects/about-us1.jpg',
  ],
  image2: '/images/projects/oborudvane1.jpg',
  description2: 'За спортни съоръжения системата се избира според типа активност, очакваното натоварване и нуждата от противохлъзгащ ефект.',
};

export default function IgrishtaISportniSaorazhenia() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}
