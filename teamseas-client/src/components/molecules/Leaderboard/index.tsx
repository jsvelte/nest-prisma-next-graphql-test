import React, { FC } from 'react'
import { Search } from 'react-feather'

import LeaderItem from './LeaderItem'
import Card from '~/components/atoms/Card'
import { Donation } from '~/utils/interfaces/donation'

type Props = {
  donations: Donation[]
}

const LeaderBoard: FC<Props> = ({ donations }): JSX.Element => {
  return (
    <Card
      shadow-size="none"
      rounded="lg"
      className="mt-4 flex-1 overflow-hidden px-6 py-5 text-[#022b49] md:mt-8 lg:max-w-[540px]"
    >
      <header className="flex items-center justify-between">
        <div className="rounded-full bg-[#a8dfe2]">
          <ul className="inline-flex items-center space-x-2 px-1 py-1 text-sm font-medium uppercase">
            <li className="rounded-full bg-white px-4 py-1">
              <a href="#">most recent</a>
            </li>
            <li className="px-4 py-1">
              <a href="#">most trach</a>
            </li>
          </ul>
        </div>
        <div className="rounded-full bg-[#a8dfe2] p-1.5 transition duration-300 ease-in-out hover:bg-[#00aacc]">
          <Search className="text-white" />
        </div>
      </header>
      <main>
        <ul className="divide-y divide-slate-200">
          {donations?.map((donation) => (
            <LeaderItem key={donation.id} {...{ ...donation }} />
          ))}
        </ul>
      </main>
    </Card>
  )
}

export default LeaderBoard
