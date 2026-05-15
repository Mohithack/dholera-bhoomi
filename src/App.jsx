import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { useContentProtection } from './hooks/useContentProtection.js';
import { ScrollToTop } from './hooks/useScrollToTop.js';
import { Home } from './pages/Home.jsx';
import { NewsPage } from './pages/NewsPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { ProjectDetail } from './pages/ProjectDetail.jsx';
import { getProject } from './data/projectsData.js';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/" replace />;
  return <ProjectDetail project={project} />;
}

export function App() {
  useContentProtection();

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  );
}
