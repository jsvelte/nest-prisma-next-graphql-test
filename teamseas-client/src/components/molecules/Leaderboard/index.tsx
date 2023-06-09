import clsx from 'clsx'
import React, { FC } from 'react'
import { CombinedError } from 'urql'
import { Search } from 'react-feather'

import LeaderItem from './LeaderItem'
import Card from '~/components/atoms/Card'
import { Donation } from '~/utils/interfaces/donation'
import { PulseLoader } from 'react-spinners'

type Props = {
  query: {
    data: Donation[]
    error: CombinedError | undefined
    isLoading: boolean
  }
  filter: {
    field: string
    actions: {
      handleChangeOrderByField: (selectedField: string) => void
    }
  }
}

const LeaderBoard: FC<Props> = (props): JSX.Element => {
  const {
    query: { data, error, isLoading },
    filter: {
      field,
      actions: { handleChangeOrderByField }
    }
  } = props

  return (
    <Card
      shadow-size="none"
      rounded="lg"
      className="mt-4 flex-1 overflow-hidden px-6 py-5 text-[#022b49] md:mt-8 lg:max-w-[540px]"
    >
      <header className="flex items-center justify-between">
        <div className="rounded-full bg-[#a8dfe2]">
          <ul className="inline-flex items-center space-x-2 px-1 py-1 text-sm font-medium uppercase">
            <li
              className={clsx(
                'cursor-pointer px-4',
                field === 'createdAt' ? 'rounded-full bg-white py-1' : ''
              )}
              onClick={() => handleChangeOrderByField('createdAt')}
            >
              <div>most recent</div>
            </li>
            <li
              className={clsx(
                'cursor-pointer px-4',
                field === 'count' ? 'rounded-full bg-white py-1' : ''
              )}
              onClick={() => handleChangeOrderByField('count')}
            >
              <div>most pounds</div>
            </li>
          </ul>
        </div>
        <div className="rounded-full bg-[#a8dfe2] p-1.5 transition duration-300 ease-in-out hover:bg-[#00aacc]">
          <Search className="text-white" />
        </div>
      </header>
      <main>
        <ul className="divide-y divide-slate-200">
          {isLoading && !error && (
            <div className="flex items-center justify-center py-10">
              <PulseLoader color="#ffb72b" size={10} />
            </div>
          )}
          {isLoading && error && (
            <p className="py-10 text-center text-sm font-medium text-rose-500">
              Something went fetching data.
            </p>
          )}

          <>
            {data?.map((donation) => (
              <LeaderItem key={donation.id} {...{ ...donation }} />
            ))}
          </>
        </ul>
      </main>
    </Card>
  )
}

export default LeaderBoard
