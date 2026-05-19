import React from 'react';
import Footer from '../../components/landing/Footer';
import Navbar from '../../components/landing/Navbar';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Мандри и кланици',
  image: '/images/projects/about-us1.jpg',
  description: 'Подови системи за мандри, кланици и помещения с високи хигиенни изисквания, влага, почистване с препарати и интензивна експлоатация.',
  points: [
    'Подходящи за мокри и хигиенни помещения',
    'Устойчивост на препарати и често почистване',
    'Безфугова и лесна за поддръжка повърхност',
    'Противохлъзгащи варианти',
    'Системи за хранително-вкусова среда',
    'Дълготрайна защита при тежка експлоатация',
  ],
  gallery: [
    '/images/projects/about-us1.jpg',
    '/images/projects/oborudvane1.jpg',
    '/images/projects/oborudvane2.jpg',
    '/images/projects/parking.jpg',
  ],
  image2: '/images/projects/oborudvane2.jpg',
  description2: 'При този тип обекти системата трябва да бъде съобразена с хигиенните изисквания, водното натоварване и начина на почистване.',
};

export default function MandriIKlanici() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}
