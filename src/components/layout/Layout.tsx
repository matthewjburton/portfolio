import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Wrapper from '../Wrapper'

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
      <Footer />
    </Wrapper>
  )
}

export default Layout
