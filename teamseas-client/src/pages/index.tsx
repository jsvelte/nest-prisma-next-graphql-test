import React from 'react'
import type { NextPage } from 'next'

import Layout from '~/components/templates/Layout'
import Card from '~/components/atoms/Card'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <section className="relative">
        <img src="/images/style.jpg" className="absolute -top-8 -z-20 w-full" />
        <Card
          shadow-size="none"
          rounded="lg"
          className="mx-auto mt-8 w-full max-w-[370px] overflow-hidden text-[#022b49]"
        >
          <header className="bg-[#f7f7f7] px-4 py-2 text-center">
            <h1 className="text-2xl font-medium uppercase">join #teamseas</h1>
          </header>
          <main className="px-4 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et odit explicabo quas
            fugit veritatis voluptate reiciendis labore eaque dolores ducimus libero, natus sit
            consectetur aliquid sint placeat, excepturi asperiores.
          </main>
        </Card>
      </section>
    </Layout>
  )
}

export default Index
