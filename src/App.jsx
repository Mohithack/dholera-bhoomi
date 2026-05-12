import { Route, Routes } from 'react-router-dom';
import { useContentProtection } from './hooks/useContentProtection.js';
import { Home } from './pages/Home.jsx';
import { NewsPage } from './pages/NewsPage.jsx';

export function App() {
  useContentProtection();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}
