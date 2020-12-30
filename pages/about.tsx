import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = (): ReactElement => (
  <Layout title="About">
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
