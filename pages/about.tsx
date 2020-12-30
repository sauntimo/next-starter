import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout/Layout';
import TitleCard from '../components/cards/TitleCard';
import { Profile } from '../interfaces';
import profileData from '../utils/profiles';

interface Props {
  profiles: Profile[],
}

const AboutPage: React.FC<Props> = ({ profiles }: Props): ReactElement => (
  <Layout title="About">
    <TitleCard
      title="Hey, I&apos;m Tim"
      subtitle="web developer based in Bristol, UK"
      body="I like running, playing bass, photography, code and video games"
    >
      <Link href="/">
        <a>
          <Button size="small">Home</Button>
        </a>
      </Link>
    </TitleCard>
    {profiles.map((profile) => (
      <TitleCard
        title={profile.name}
        titleComponent="h4"
        subtitle={profile.description}
        body=""
      >
        <Link href={profile.url}>
          <a>
            <Button size="small">Visit</Button>
          </a>
        </Link>
      </TitleCard>
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const profiles: Profile[] = profileData;
  return { props: { profiles } };
};

export default AboutPage;
