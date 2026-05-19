import React from 'react';
import Footer from '../../components/landing/Footer';
import Navbar from '../../components/landing/Navbar';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Двор и открити части',
  image: '/images/projects/kashta-za-gosti-1.jpg',
  description: 'Настилки и защитни системи за дворове, алеи, външни площадки и открити части около сгради. Решенията са устойчиви на атмосферни влияния, натоварване и ежедневна употреба.',
  points: [
    'Подходящи за външни площи',
    'Устойчивост на UV лъчи и атмосферни влияния',
    'Лесна поддръжка и почистване',
    'Противохлъзгащи варианти',
    'Дълготрайна защита на основата',
    'Естетичен завършек за дворни пространства',
  ],
  gallery: [
    '/images/projects/kashta-za-gosti-1.jpg',
    '/images/projects/oborudvane2.jpg',
    '/images/projects/about-us1.jpg',
    '/images/projects/parking.jpg',
  ],
  image2: '/images/projects/oborudvane2.jpg',
  description2: 'Системите за открити части се подбират според основата, наклона, водоотвеждането и начина на използване на площта.',
};

export default function DvorIOtkritiChasti() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}
