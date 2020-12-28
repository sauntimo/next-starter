/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
);

export default App;
