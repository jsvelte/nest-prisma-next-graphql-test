import React, { FC } from 'react'
import { FcFullTrash } from 'react-icons/fc'
import { FaLongArrowAltRight, FaReddit } from 'react-icons/fa'
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather'

import Card from '~/components/atoms/Card'

type Props = {}

const ProgressCard: FC<Props> = (): JSX.Element => {
  return (
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
              <FcFullTrash key={i} className={`h-8 w-8 ${i < 16 ? '' : 'opacity-50'}`} />
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
  )
}

export default ProgressCard
