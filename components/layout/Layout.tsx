import React, { ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonAppBar from '../nav/ButtonAppBar';

import styles from './layout.module.css';

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
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <body>
      <CssBaseline />
      <ButtonAppBar pageTitle={pageTitle} />
      <div className={cn(styles.container, 'w-screen grid grid-cols-12 gap-4')}>
        {children}
      </div>
    </body>
  </>
);

Layout.defaultProps = {
  children: null,
  title: 'sauntimo.org',
};

export default Layout;
