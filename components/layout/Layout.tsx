import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import ButtonAppBar from '../nav/ButtonAppBar';

type Props = {
  children?: ReactNode,
  title?: string,
}

const Layout: React.FC<Props> = ({ children, title: pageTitle = 'sauntimo.org' }: Props): ReactElement => (
  <>
    <Head>
      <title>{`${pageTitle} | sauntimo.org`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:300,400,500,700&display=swap" />
    </Head>
    <ButtonAppBar pageTitle={pageTitle} />
    <div className="container">
      {children}
    </div>
  </>
);

Layout.defaultProps = {
  children: null,
  title: 'sauntimo.org',
};

export default Layout;
