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
  gallery: [
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
  ],
  image2: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
  description2: 'Полагаме маркировки и сигнализация в неограничена цветова гама, съобразени с конкретните изисквания на обекта. Нашите настилки за паркинги са тествани и сертифицирани за употреба на открито и са устойчиви на UV лъчение, замръзване и химически агенти.',
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