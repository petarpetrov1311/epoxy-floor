import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Многослойни епоксидни настилки',
  image: '/images/projects/img-3147-1-scaled.jpeg',
  description: `Многослойната безфугова настилка от епоксидна смола е върхово постижение в областта на промишлените подове. Тя съчетава висока механична якост, отлична химическа устойчивост и дълъг експлоатационен живот, правейки я идеален избор за обекти с интензивна експлоатация.`,
  points: [
    'Висока механична здравина',
    'Отлична химическа устойчивост',
    'Дълъг експлоатационен живот',
    'Безфугова повърхност',
    'Подходяща за интензивна употреба',
    'Материали от Германия и Холандия',
  ],
  gallery: [
    '/images/projects/img-3147-1-scaled.jpeg',
    '/images/projects/oborudvane1.jpg',
    '/images/projects/about-us1.jpg',
    '/images/projects/oborudvane2.jpg',
    '/images/projects/about-us2.jpg',
  ],
  image2: '/images/projects/oborudvane1.jpg',
  description2: 'Многослойната система се изгражда чрез последователно нанасяне на грунд, основен слой и защитен финиш, като всеки слой е прецизно контролиран за дебелина и качество. Резултатът е монолитна, безфугова повърхност с изключителни технически характеристики и дълъг живот.',
};

export default function MnogoslojniNastilki() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}