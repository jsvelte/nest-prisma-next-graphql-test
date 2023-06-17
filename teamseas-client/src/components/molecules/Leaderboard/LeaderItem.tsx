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
  const { count, displayName, message, team, createdAt } = props

  const getAvatarUrl = (count: number): string => {
    switch (true) {
      case count >= 1 && count <= 20:
        return '/donation-avatar/1.png'
      case count > 20 && count <= 50:
        return '/donation-avatar/2.png'
      case count > 50 && count <= 100:
        return '/donation-avatar/3.png'
      default:
        return '/donation-avatar/4.png'
    }
  }

  return (
    <li className="flex items-center justify-between py-6">
      <div className="inline-flex items-center space-x-4">
        {/* User Details */}
        <div className="shrink-0">
          <img src={getAvatarUrl(count)} alt="" className="h-14 w-14" />
        </div>
        <div className="pr-4">
          <span className="text-xs uppercase text-[#ea8717]">{team}</span>
          <h1 className="font-bold capitalize text-[#00aacc]">{displayName}</h1>
          <p className="text-xs">{message}</p>
        </div>
      </div>
      {/* Donation Details */}
      <div className="inline-flex shrink-0 flex-col items-end space-y-2 text-xs">
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
