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
  gallery: [
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2024/01/%D0%BA%D1%8A%D1%89%D0%B0-%D0%B7%D0%B0-%D0%B3%D0%BE%D1%81%D1%82%D0%B8-1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
  ],
  image2: 'https://www.epoxy-fl.com/wp-content/uploads/2024/01/%D0%BA%D1%8A%D1%89%D0%B0-%D0%B7%D0%B0-%D0%B3%D0%BE%D1%81%D1%82%D0%B8-1.jpg',
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