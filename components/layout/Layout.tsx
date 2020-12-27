import React, { ReactNode } from 'react'
import cn from 'classnames'
import Head from 'next/head'

import Nav from '../nav/Nav'

import styles from './layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'sauntimo.org' }: Props) => (
  <div>
    <Head>
      <title>{`${title} | sauntimo.org`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-screen">
      <Nav></Nav>
    </header>
    <div className={cn(styles.container, `w-screen grid grid-cols-12`)}>
      {children}
    </div>
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
)

export default Layout
