/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => (
  <React.Fragment key="app">
    <CssBaseline />
    <Component {...pageProps} />
  </React.Fragment>
);

export default App;
