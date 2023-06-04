import React, { FC } from 'react'

type Props = {}

const NotificationWrapper: FC<Props> = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-[#e13a06] py-2.5 uppercase text-white sm:flex-row sm:space-x-4 sm:space-y-0">
      <h1 className=" text-sm font-semibold">clean up with #teamseas and get involved</h1>
      <button className="rounded-full border border-white px-5 py-0.5 text-base uppercase transition duration-200 ease-in-out hover:bg-[#a8dfe2] sm:py-1">
        sign up
      </button>
    </div>
  )
}

export default NotificationWrapper
