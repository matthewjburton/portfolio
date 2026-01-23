import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ProjectPage } from '@/pages/ProjectPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { basename } from './basename'
import { ScrollToTop } from './ScrollToTop'
import { PostPage } from '@/pages/PostPage'
import { ROUTES } from './routes'

const Router = () => (
  <BrowserRouter basename={basename}>
    <ScrollToTop />
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.PROJECTS.PATTERN} element={<ProjectPage />} />
        <Route path={ROUTES.POSTS.PATTERN} element={<PostPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export { Router }
