import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Производства и складове',
  image: '/images/projects/oborudvane1.jpg',
  description: `Предлагаме подови настилки за всякакъв вид производствена и складова дейност. Тежки, индустриални, химично и топлоустойчиви подове за всяка индустрия — от леката до химическата промишленост. Настилките издържат на интензивно движение на тежка техника и вилични кари.`,
  points: [
    'Висока механична и ударна якост',
    'Устойчивост на масла и химикали',
    'Подходящи за вилични кари и тежка техника',
    'Антистатични варианти при нужда',
    'Бързо изпълнение с минимален престой',
    'Гаранция 5–10 години',
  ],
  gallery: [
    '/images/projects/oborudvane1.jpg',
    '/images/projects/oborudvane2.jpg',
    '/images/projects/about-us1.jpg',
    '/images/projects/about-us2.jpg',
    '/images/projects/parking.jpg',
  ],
  image2: '/images/projects/about-us2.jpg',
  description2: 'Нашите специалисти извършват обстоен оглед на обекта преди полагане, за да предложат оптималното решение за всяка конкретна ситуация. Работим с материали от водещи немски и холандски производители, гарантирайки издръжливост и дълъг живот на покритието дори при най-тежки условия на експлоатация.',
};

export default function ProizvodstvaISkladove() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}