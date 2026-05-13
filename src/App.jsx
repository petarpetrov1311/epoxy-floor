import { Toaster } from "@/components/ui/toaster"
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import BlogPost from './pages/BlogPost';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import DekorativniNastilki from './pages/services/DekorativniNastilki';
import HranitelnoPromishlenost from './pages/services/HranitelnaPromishlenost';
import MnogoslojniNastilki from './pages/services/MnogoslojniNastilki';
import ParkingIGaraji from './pages/services/ParkingiIGaraji';
import ProizvodstvaISkladove from './pages/services/ProizvodstveniSkladove';
import TerasiIHidroizolacii from './pages/services/TerasiIHidroizolacii';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogove" element={<Blogs />} />
        <Route path="/blogove/:blogSlug" element={<BlogPost />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/galeria/:categorySlug" element={<Gallery />} />
        <Route path="/nastilki/hranitelno-vkusova" element={<HranitelnoPromishlenost />} />
        <Route path="/nastilki/proizvodstva-i-skladove" element={<ProizvodstvaISkladove />} />
        <Route path="/nastilki/parking-i-garaji" element={<ParkingIGaraji />} />
        <Route path="/nastilki/terasi-i-hidroizolacii" element={<TerasiIHidroizolacii />} />
        <Route path="/nastilki/dekorativni" element={<DekorativniNastilki />} />
        <Route path="/nastilki/mnogoslojni" element={<MnogoslojniNastilki />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
