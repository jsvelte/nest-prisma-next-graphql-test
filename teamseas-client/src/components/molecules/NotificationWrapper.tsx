import React, { FC } from 'react'

type Props = {}

const NotificationWrapper: FC<Props> = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-[#e13a06] py-2.5 uppercase text-white">
      <h1 className=" text-sm font-semibold">clean up with #teamseas and get involved</h1>
      <button className="rounded-full border border-white px-5 py-1 text-base uppercase transition duration-200 ease-in-out hover:bg-[#a8dfe2]">
        sign up
      </button>
    </div>
  )
}

export default NotificationWrapper
