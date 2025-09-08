import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Compare } from './pages/Compare';
import { Features } from './pages/Features';
import { FooterView } from './components/footerComponents/FooterView';
import { FrontPage } from './pages/FrontPage';
import { HeaderView } from './components/headerComponents/HeaderView';
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
  return (
    <Router>
      <HeaderView />
      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FooterView />
    </Router>
  );
}
