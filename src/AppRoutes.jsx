import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Ferramentas from './pages/Ferramentas';
import About from './pages/About';
import ProjetoFuturo from './pages/ProjetoFuturo';
import Subscriptions from './pages/Subscriptions';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<App />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/projetos-futuros" element={<ProjetoFuturo />} />        
      </Routes>
    </Router>
  );
}
