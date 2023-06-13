import React, { FC } from 'react'

import Card from '~/components/atoms/Card'

type Props = {}

const LeaderBoard: FC<Props> = (): JSX.Element => {
  return (
    <Card
      shadow-size="none"
      rounded="lg"
      className="mt-4 overflow-hidden text-[#022b49] md:mt-8 md:max-w-[450px] lg:max-w-[540px]"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ea iusto porro expedita
      quisquam nemo sit officia voluptatem, architecto quo minus, adipisci ipsum corrupti
      perspiciatis autem nisi optio necessitatibus molestiae.
    </Card>
  )
}

export default LeaderBoard
