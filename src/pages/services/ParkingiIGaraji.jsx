import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Паркинги и гаражи',
  image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
  description: `Нашите настилки за паркинги и гаражи са специално проектирани да издържат на интензивно автомобилно движение. Лесно се почистват, не се хлъзгат и са устойчиви на масло и петролни продукти. Полагаме и маркировки в неограничена цветова гама.`,
  points: [
    'Устойчивост на масло и петролни продукти',
    'Противохлъзгащи свойства',
    'Лесно почистване',
    'Маркировки в неограничена цветова гама',
    'Устойчивост на UV лъчение',
    'Подходящи за открити и закрити паркинги',
  ],
};

export default function ParkingIGaraji() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}