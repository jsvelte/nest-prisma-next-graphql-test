import clsx from 'clsx'
import React from 'react'
import type { NextPage } from 'next'
import { FcFullTrash } from 'react-icons/fc'
import { FaLongArrowAltRight, FaReddit } from 'react-icons/fa'
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather'

import Card from '~/components/atoms/Card'
import Layout from '~/components/templates/Layout'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <section className="relative">
        {/* Donation Card Field */}
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

      {/* History Cards */}
      <section className="relative mt-8 w-full !bg-[#00a9cc] px-4 pb-20 md:px-8">
        <div className="flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-8">
          {/* Leader Board */}
          <Card
            shadow-size="none"
            rounded="lg"
            className="mt-4 overflow-hidden text-[#022b49] md:mt-8 md:max-w-[450px] lg:max-w-[540px]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ea iusto porro
            expedita quisquam nemo sit officia voluptatem, architecto quo minus, adipisci ipsum
            corrupti perspiciatis autem nisi optio necessitatibus molestiae.
          </Card>
          {/* Track Progress Card */}
          <div className="flex flex-col space-y-8">
            <Card
              shadow-size="none"
              rounded="lg"
              className="mt-4 max-w-full overflow-hidden border-none !bg-[#a8dfe2] py-6 text-[#022b49] md:mt-8"
            >
              <header className="py-4 text-center sm:px-14 md:px-20 lg:px-32">
                <h1 className="mx-auto text-3xl font-extrabold uppercase text-[#0058a5]">
                  Track our progress
                </h1>
              </header>
              <main>
                <div className="mx-14 rounded-full bg-[#ffb72b] py-2 text-center text-lg text-white shadow-md">
                  <span className="font-extrabold">15,103,847</span> POUNDS REMOVED
                </div>
                <div className="mt-4 grid shrink-0 grid-cols-10 gap-x-3 gap-y-6 px-8 py-4">
                  {Array.from({ length: 33 }, (_, i) => (
                    <FcFullTrash
                      key={i}
                      className={`h-8 w-8 ${i < 16 ? '' : 'opacity-50'}`}
                      alt=""
                    />
                  ))}
                </div>
              </main>
              <footer className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center space-x-3 rounded-full bg-white px-6 py-1.5 text-center text-lg font-medium text-[#0056b3] shadow-lg"
                >
                  <span>How it Works</span>
                  <div className="rounded-full bg-[#99bcdb] px-3 text-white">
                    <FaLongArrowAltRight className="h-5 w-5" />
                  </div>
                </button>
              </footer>
            </Card>
            <div className="overflow-hidden rounded">
              <a href="#">
                <img
                  src="https://assets10.teamassets.net/assets/images/shop-teamseas3.png"
                  className="w-full"
                />
              </a>
            </div>
            <Card shadow-size="none" rounded="lg" className="space-y-2 p-4 text-[#0058a5]">
              <span>#TEAMSEAS SOCIAL</span>
              <div className="flex items-center space-x-4">
                <div className="inline-block rounded-full bg-[#0058a5] p-1.5 text-white">
                  <Instagram className="h-5 w-5" />
                </div>

                <div className="inline-block rounded-full bg-[#0058a5] p-1.5 text-white">
                  <Youtube className="h-5 w-5" />
                </div>
                <div className="inline-block rounded-full bg-[#0058a5] p-1.5 text-white">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="inline-block rounded-full bg-[#0058a5] p-1.5 text-white">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="inline-block rounded-full bg-[#0058a5] p-1.5 text-white">
                  <FaReddit className="h-5 w-5" />
                </div>
              </div>
            </Card>
          </div>
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
