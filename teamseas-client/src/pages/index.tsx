import React from 'react'
import type { NextPage } from 'next'

import Card from '~/components/atoms/Card'
import Layout from '~/components/templates/Layout'
import clsx from 'clsx'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <section className="relative">
        <img src="/images/style.jpg" className="absolute -top-8 -z-20 w-full" />
        <div className="px-4 md:px-8">
          <Card
            shadow-size="none"
            rounded="lg"
            className="mx-auto mt-8 w-full  overflow-hidden text-[#022b49] md:max-w-[363px] lg:max-w-[445px]"
          >
            <header className="bg-[#f7f7f7] px-4 py-3 text-center">
              <h1 className="text-2xl font-medium uppercase">join #teamseas</h1>
            </header>
            <main className="mb-3 space-y-4 px-4 py-2">
              <p className="px-16 text-center">Every $1 is one less pound of trash in the ocean</p>
              <div className="grid grid-cols-3 gap-4">
                <PoundItem {...{ count: 5 }} />
                <PoundItem {...{ count: 20 }} />
                <PoundItem {...{ count: 50 }} />
                <PoundItem {...{ count: 100 }} />
                <div className="col-span-2 flex-1">
                  <input
                    type="text"
                    className={clsx(
                      'h-full w-full rounded-lg border border-black pl-8 text-xl',
                      'outline-none transition duration-150 ease-in-out placeholder:font-medium',
                      'placeholder:text-black focus:border-[#ef7517]'
                    )}
                    placeholder="Other Amount"
                  />
                </div>
              </div>
              <p className="px-4 text-center italic text-[#7a8289]">
                We take crypto! You will see the options on step 3
              </p>
              <div className="flex flex-col items-center justify-center space-y-3">
                <div>
                  <button
                    type="button"
                    className="block rounded-full bg-[#ef7517] px-10 py-2.5 uppercase text-white transition duration-300 ease-in-out hover:bg-[#ffb72b]"
                  >
                    Next
                  </button>
                </div>
                <a href="#" className="font-semibold underline">
                  FAQ
                </a>
              </div>
            </main>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

const PoundItem = ({ count }: { count: number }): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center rounded-lg bg-[#f6f6f4] py-7 transition',
        'duration-300 ease-in-out hover:bg-[#00aacc] hover:text-white',
        'cursor-pointer'
      )}
    >
      <span>{count}</span>
      <p className="uppercase">pounds</p>
    </div>
  )
}

export default Index
