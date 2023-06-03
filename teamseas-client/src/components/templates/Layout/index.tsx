import clsx from 'clsx'
import Head from 'next/head'
import { Menu } from 'react-feather'
import React, { FC, ReactNode } from 'react'
import { Montserrat } from '@next/font/google'

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
      <div className={clsx('relative h-screen min-h-screen', montserrat.className)}>
        <NotificationWrapper />
        <button
          className={clsx(
            'absolute right-0 top-2 rounded-full border-2 border-white',
            'p-2 text-white transition duration-200 ease-in-out hover:opacity-80'
          )}
        >
          <Menu className="h-5 w-5" />
        </button>
        {children}
      </div>
    </>
  )
}

export default Layout
