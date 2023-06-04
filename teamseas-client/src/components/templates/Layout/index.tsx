import clsx from 'clsx'
import Head from 'next/head'
import { Menu } from 'react-feather'
import React, { FC, ReactNode } from 'react'
import { Montserrat } from '@next/font/google'

import Header from '~/components/organisms/Header'
import NotificationWrapper from '~/components/molecules/NotificationWrapper'

type Props = {
  children: ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-montserrat'
})

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>#Teamseas</title>
      </Head>
      <div className={clsx('relative h-screen min-h-screen antialiased', montserrat.className)}>
        <NotificationWrapper />
        <button
          className={clsx(
            'fixed right-4 top-4 z-50 rounded-full border-2 border-white shadow-md sm:top-2',
            'p-2 text-white transition duration-200 ease-in-out',
            'bg-white/20 hover:bg-white/40'
          )}
        >
          <Menu className="h-5 w-5" />
        </button>
        <Header />
      </div>
    </>
  )
}

export default Layout
