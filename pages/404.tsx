import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = (): ReactElement => (
  <Layout title="Page Not Found">
    <div className="container col-start-2 col-end-12">
      <h1>404 - Page Not Found</h1>
      <p>Looks like you&apos;re looking for something that isn&apos;t here.</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
