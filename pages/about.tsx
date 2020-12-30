import React, { ReactElement } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout/Layout';
import TitleCard from '../components/cards/TitleCard';

const AboutPage: React.FC = (): ReactElement => (
  <Layout title="Home">
    <TitleCard
      title="Hey, I&apos;m Tim"
      subtitle="web developer based in Bristol, UK"
      body="I like running, playing bass, photography, code and video games"
    >
      <Link href="https://github.com/sauntimo/next-starter">
        <a>
          <Button size="small">View Code</Button>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Button size="small">Home</Button>
        </a>
      </Link>
    </TitleCard>
  </Layout>
);

export default AboutPage;
