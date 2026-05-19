import { Toaster } from "@/components/ui/toaster"
import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import BlogPost from './pages/BlogPost';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import DekorativniNastilki from './pages/services/DekorativniNastilki';
import DvorIOtkritiChasti from './pages/services/DvorIOtkritiChasti';
import HranitelnoPromishlenost from './pages/services/HranitelnaPromishlenost';
import IgrishtaISportniSaorazhenia from './pages/services/IgrishtaISportniSaorazhenia';
import MandriIKlanici from './pages/services/MandriIKlanici';
import MnogoslojniNastilki from './pages/services/MnogoslojniNastilki';
import Mortel from './pages/services/Mortel';
import ParkingIGaraji from './pages/services/ParkingiIGaraji';
import ProizvodstvaISkladove from './pages/services/ProizvodstveniSkladove';
import TerasiIHidroizolacii from './pages/services/TerasiIHidroizolacii';

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogove" element={<Blogs />} />
        <Route path="/blogove/:blogSlug" element={<BlogPost />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/galeria/:categorySlug" element={<Gallery />} />
        <Route path="/nastilki/terasi-i-ploski-pokrivi" element={<TerasiIHidroizolacii />} />
        <Route path="/nastilki/dvor-i-otkriti-chasti" element={<DvorIOtkritiChasti />} />
        <Route path="/nastilki/igrishta-i-sportni-saorazhenia" element={<IgrishtaISportniSaorazhenia />} />
        <Route path="/nastilki/hranitelno-vkusova" element={<HranitelnoPromishlenost />} />
        <Route path="/nastilki/proizvodstva-i-skladove" element={<ProizvodstvaISkladove />} />
        <Route path="/nastilki/parking-i-garaji" element={<ParkingIGaraji />} />
        <Route path="/nastilki/terasi-i-hidroizolacii" element={<TerasiIHidroizolacii />} />
        <Route path="/nastilki/mortel" element={<Mortel />} />
        <Route path="/nastilki/mandri-i-klanici" element={<MandriIKlanici />} />
        <Route path="/nastilki/dekorativni" element={<DekorativniNastilki />} />
        <Route path="/nastilki/mnogoslojni" element={<MnogoslojniNastilki />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
