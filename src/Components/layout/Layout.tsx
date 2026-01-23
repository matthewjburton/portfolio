import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Wrapper } from '../Wrapper'

const Layout = () => {
  return (
    <Wrapper>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  )
}

export { Layout }
