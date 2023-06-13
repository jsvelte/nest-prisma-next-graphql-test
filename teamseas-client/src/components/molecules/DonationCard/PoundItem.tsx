import clsx from 'clsx'
import React, { FC } from 'react'

type Props = {
  count: number
}

const PoundItem: FC<Props> = ({ count }): JSX.Element => {
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

export default PoundItem
