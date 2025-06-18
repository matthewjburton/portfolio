import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ProjectPage from '@/pages/ProjectPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { basename } from './basename'
import ScrollToTop from './ScrollToTop'

const Router = () => (
  <BrowserRouter basename={basename}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router
