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