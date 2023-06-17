import moment from 'moment'
import React, { FC } from 'react'

type Props = {
  id?: number
  count: number
  displayName: string
  email: string
  message?: string | null
  team?: string | null
  mobile?: string | null
  createdAt: string
}

const LeaderItem: FC<Props> = (props): JSX.Element => {
  const { count, displayName, email, message, team, mobile, createdAt } = props

  return (
    <li className="flex items-center justify-between py-4">
      <div className="inline-flex items-center space-x-4">
        {/* User Details */}
        <div className="shrink-0">
          <img src="/donation-avatar/1.png" alt="" className="h-14 w-14" />
        </div>
        <div>
          <h1 className="font-bold text-[#00aacc]">{displayName}</h1>
        </div>
      </div>
      {/* Donation Details */}
      <div className="inline-flex flex-col items-end space-y-2 text-xs">
        <span className="shrink-0 rounded bg-[#00aacc] px-2.5 py-1.5 font-bold text-white">
          {count} pounds
        </span>
        <p className="font-light text-[#7a8489]">
          {moment(createdAt).format('M/D/YYYY, h:mm:ss A')}
        </p>
      </div>
    </li>
  )
}

export default LeaderItem
