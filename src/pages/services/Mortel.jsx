import React from 'react';
import Footer from '../../components/landing/Footer';
import Navbar from '../../components/landing/Navbar';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Мортел',
  image: '/images/projects/img-3147-1-scaled.jpeg',
  description: 'Мортел системи за здрави, износоустойчиви и надеждни подови решения при обекти с високи изисквания към натоварване и експлоатация.',
  points: [
    'Висока механична здравина',
    'Подходящи за натоварени площи',
    'Устойчивост на износване',
    'Дълъг експлоатационен живот',
    'Възможност за различни финиши',
    'Стабилна и практична подова система',
  ],
  gallery: [
    '/images/projects/img-3147-1-scaled.jpeg',
    '/images/projects/about-us2.jpg',
    '/images/projects/oborudvane1.jpg',
    '/images/projects/oborudvane2.jpg',
  ],
  image2: '/images/projects/about-us2.jpg',
  description2: 'Системите се подбират според основата, дебелината, очакваното натоварване и желания завършек на повърхността.',
};

export default function Mortel() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}
