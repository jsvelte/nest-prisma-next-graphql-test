import React, { FC } from 'react'

import MorningIcon from '~/utils/icons/MorningIcon'
import useScreenCondition from '~/hooks/useScreenCondition'

type Props = {}

const Header: FC<Props> = (): JSX.Element => {
  // SCREEN SIZE CONDITION HOOKS
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  return (
    <header className="relative flex h-[400px] items-center justify-center bg-gradient-to-b from-amber-500 to-amber-100 px-4">
      {!isMediumScreen && (
        <>
          <MorningIcon className="absolute left-0 h-[300px]" />
          <img
            src="/images/removal-update-goal-reached.png"
            className="absolute right-0 scale-75"
          />
        </>
      )}
      <div className="relative flex w-full max-w-xl flex-col items-center justify-center space-y-4">
        <img
          src="https://assets04.teamassets.net/assets/images/teamseas-tm-logo.png"
          className="h-[133px] w-[300px]"
          alt=""
        />
        <p className="text-center text-xl text-[#212b4b]">
          We did it! Now let’s keep going. Come back anytime you feel like removing some trash!
        </p>
        <h1 className="text-5xl font-semibold text-[#6c0146]">33,386,602</h1>
        <span className="text-xl font-light text-[#6c0146]">POUNDS OF TRASH</span>
      </div>
    </header>
  )
}

export default Header
