import React from 'react'
import type { NextPage } from 'next'

import Layout from '~/components/templates/Layout'
import ProgressCard from '~/components/molecules/ProgressCard'
import LeaderBoard from '~/components/molecules/Leaderboard'
import DonationCard from '~/components/molecules/DonationCard'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <section className="relative">
        {/* Donation Card Field */}
        <div className="px-4 md:px-8">
          <DonationCard />
        </div>
      </section>

      {/* History Cards */}
      <section className="relative mt-8 w-full !bg-[#00a9cc] px-4 pb-20 md:px-8">
        <div className="flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-8">
          {/* Leader Board */}
          <LeaderBoard />
          {/* Track Progress Card */}
          <ProgressCard />
        </div>
      </section>
    </Layout>
  )
}

export default Index
