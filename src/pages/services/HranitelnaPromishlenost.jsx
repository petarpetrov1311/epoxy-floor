import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import ServicePageLayout from '../../components/landing/ServicePageLayout';

const data = {
  title: 'Хранително-вкусова промишленост',
  image: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
  description: `Епоксидните настилки за хранително-вкусовата промишленост са проектирани да отговарят на най-строгите хигиенни и технологични изисквания. Прилагаме ги в месопреработката, млекопреработката, хлебарството и сладкарството, производството на напитки и много други сектори.`,
  points: [
    'Пълно съответствие с изискванията НАССР',
    'Устойчивост на мазнини, киселини и дезинфектанти',
    'Антибактериални свойства',
    'Лесно почистване и дезинфекция',
    'Безшевна повърхност без пори',
    'Устойчивост на температурни разлики',
  ],
  gallery: [
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane1.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/about-us2.jpg',
    'https://www.epoxy-fl.com/wp-content/uploads/2022/12/parking.jpg',
  ],
  image2: 'https://www.epoxy-fl.com/wp-content/uploads/2022/12/oborudvane2.jpg',
  description2: 'Използваме висококачествени материали от Германия и Холандия, които са специално разработени за приложения в хранително-вкусовата промишленост. Системите ни отговарят на всички европейски стандарти за хигиена и безопасност на храните, като осигуряват дълготраен и надежден резултат с гаранция до 10 години.',
};

export default function HranitelnoPromishlenost() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <ServicePageLayout {...data} />
      <Footer />
    </div>
  );
}