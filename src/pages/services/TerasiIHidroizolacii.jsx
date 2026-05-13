import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Тераси и хидроизолации',
  image: '/images/projects/oborudvane2.jpg',
  description: `Гумираната хидроизолационна система за открити площи е специално разработена за тераси, балкони и покриви. Устойчива е на големи температурни амплитуди и атмосферни влияния, осигурявайки трайна водонепропускливост и естетичен вид.`,
  points: [
    'Устойчивост на атмосферни влияния',
    'Водонепропускливост',
    'Устойчивост на UV лъчение',
    'Голяма температурна амплитуда',
    'Противохлъзгащи варианти',
    'Подходящи за тераси, балкони и покриви',
  ],
  gallery: [
    '/images/projects/oborudvane2.jpg',
    '/images/projects/kashta-za-gosti-1.jpg',
    '/images/projects/about-us1.jpg',
    '/images/projects/parking.jpg',
    '/images/projects/oborudvane1.jpg',
  ],
  image2: '/images/projects/kashta-za-gosti-1.jpg',
  description2: 'Гумираната хидроизолационна система се нанася безпроблемно върху съществуващи основи и е подходяща за нови и стари тераси, балкони и покриви. Системата е изпитана при екстремни климатични условия и осигурява дълготрайна защита срещу проникване на вода и влага.',
};

export default function TerasiIHidroizolacii() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}