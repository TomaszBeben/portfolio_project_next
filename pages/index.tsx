import type { NextPage } from 'next'
import Content from '../components/dashboard/content/Content'
import Dashboard from '../components/dashboard/Dashboard'

const Home: NextPage = () => {
  return (
    <>
      <Dashboard>
        <Content/>
      </Dashboard>
    </>
  )
}

export default Home
