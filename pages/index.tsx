import React, { ReactElement } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout/Layout';
import TitleCard from '../components/cards/TitleCard';

const IndexPage: React.FC = (): ReactElement => (
  <Layout title="Home">
    <TitleCard
      title="Next.js Project Starter"
      subtitle="Simple site to use as a base for more interesting projects"
      body="Built with Node, Typescript, Next.js, React and Material UI"
    >
      <Link href="https://github.com/sauntimo/next-starter">
        <a>
          <Button size="small">View Code</Button>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Button size="small">About</Button>
        </a>
      </Link>
    </TitleCard>
  </Layout>
);

export default IndexPage;
