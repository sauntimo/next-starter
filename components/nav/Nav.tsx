import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './nav.module.css'

interface NavItem {
  title: string,
  address: string,
  external?: boolean
}

const nav: NavItem[] = [
  {
    title: 'Home',
    address: '/',
  },
  {
    title: 'About',
    address: '/about',
  },
  {
    title: 'Users List',
    address: '/users',
  },
  {
    title: 'Users API',
    address: '/api/users',
    external: true
  },
]


const Nav = () => (
  <nav className={cn(styles.nav, 'space-x-0')}>
    {nav.map(item => {
        if (item?.external){
          return (
            <a href={item.address}>{item.title}</a>
          );
        }
        return (
          <Link href={item.address}>
            <a>{item.title}</a>
          </Link>
        )
      }).map((item, index) => <div key={index} className="linkContainer p-2 block md:inline-block">{item}</div>)
    }
  </nav>
)

export default Nav
