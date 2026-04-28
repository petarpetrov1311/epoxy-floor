import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Тераси и хидроизолации',
  image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
  description: `Гумираната хидроизолационна система за открити площи е специално разработена за тераси, балкони и покриви. Устойчива е на големи температурни амплитуди и атмосферни влияния, осигурявайки трайна водонепропускливост и естетичен вид.`,
  points: [
    'Устойчивост на атмосферни влияния',
    'Водонепропускливост',
    'Устойчивост на UV лъчение',
    'Голяма температурна амплитуда',
    'Противохлъзгащи варианти',
    'Подходящи за тераси, балкони и покриви',
  ],
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