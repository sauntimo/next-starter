import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const IndexPage: React.FC = (): ReactElement => (
  <Layout title="Home">
    <div className="hero">
      <h1>sauntimo.org</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
