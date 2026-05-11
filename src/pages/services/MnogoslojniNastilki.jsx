import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Многослойни епоксидни настилки',
  image: 'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
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
    'https://www.epoxy-fl.com/wp-content/uploads/2026/02/IMG_3147-1-scaled.jpeg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
  ],
  image2: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
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