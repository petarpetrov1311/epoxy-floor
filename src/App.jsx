import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import DekorativniNastilki from './pages/services/DekorativniNastilki';
import HranitelnoPromishlenost from './pages/services/HranitelnaPromishlenost';
import MnogoslojniNastilki from './pages/services/MnogoslojniNastilki';
import ParkingIGaraji from './pages/services/ParkingiIGaraji';
import ProizvodstvaISkladove from './pages/services/ProizvodstveniSkladove';
import TerasiIHidroizolacii from './pages/services/TerasiIHidroizolacii';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
