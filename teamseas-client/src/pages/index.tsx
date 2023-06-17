import { useQuery } from 'urql'
import type { NextPage } from 'next'
import React, { useState } from 'react'

import { donations } from '~/utils/data/donations'
import Layout from '~/components/templates/Layout'
import { Donation } from '~/utils/interfaces/donation'
import { GetAllDonationsQuery } from '~/graphql/queries'
import LeaderBoard from '~/components/molecules/Leaderboard'
import ProgressCard from '~/components/molecules/ProgressCard'
import DonationCard from '~/components/molecules/DonationCard'

type DonationsQueryRes = {
  donations: Donation[]
}

const Index: NextPage = (): JSX.Element => {
  const [field, setOrderByField] = useState<string>('createdAt')

  const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
    query: GetAllDonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: 'desc'
      }
    }
  })

  return (
    <Layout>
      <section className="relative">
        {/* Donation Card Field */}
        <div className="px-4 lg:px-8">
          <DonationCard />
        </div>
      </section>

      {/* History Cards */}
      <section className="relative mt-8 w-full !bg-[#00a9cc] px-4 pb-20 lg:px-8">
        <div className="flex flex-col-reverse justify-center gap-4 lg:flex-row lg:gap-8">
          {/* Leader Board */}
          <LeaderBoard
            {...{
              donations: data?.donations ?? [],
              queryState: {
                error,
                isLoading: fetching || !data
              }
            }}
          />
          {/* Track Progress Card */}
          <ProgressCard />
        </div>
      </section>
    </Layout>
  )
}

export default Index
