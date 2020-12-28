import Link from 'next/link';
import Layout from '../components/layout/Layout';

const IndexPage = () => (
  <Layout title="Home">
    <div className="hero col-start-2 col-end-12 md:col-start-4 md:col-end-10 bg-gray-200 border border-gray-500 border-solid rounded-lg p-8">
      <h1 className="text-xl md:text-5xl font-semibold">sauntimo.org</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
