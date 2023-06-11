import React from 'react'
import { Provider } from 'urql'
import type { AppProps } from 'next/app'

import '~/styles/globals.css'
import { client } from '~/lib/urqlClient'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
