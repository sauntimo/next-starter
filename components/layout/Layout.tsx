import React, { ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import Head from 'next/head';

import Nav from '../nav/Nav';

import styles from './layout.module.css';

type Props = {
  children?: ReactNode,
  title?: string,
}

const Layout: React.FC<Props> = ({ children, title = 'sauntimo.org' }: Props): ReactElement => (
  <div>
    <Head>
      <title>{`${title} | sauntimo.org`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-screen">
      <Nav />
    </header>
    <div className={cn(styles.container, 'w-screen grid grid-cols-12')}>
      {children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: null,
  title: 'sauntimo.org',
};

export default Layout;
