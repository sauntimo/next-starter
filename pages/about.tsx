import Link from 'next/link'
import Layout from '../components/layout/Layout'

const AboutPage = () => (
  <Layout title="About">
    <div className="container col-start-2 col-end-12">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default AboutPage
