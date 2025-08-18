import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderView } from './components/headerComponents/HeaderView';
import { FooterView } from './components/footerComponents/FooterView';
import { FrontPage } from './pages/FrontPage';
import { Features } from './pages/Features';
import { Compare } from './pages/Compare';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Router>
      <HeaderView />
      <main>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/features' element={<Features />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <FooterView />
    </Router>
  );
}
