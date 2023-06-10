import { animate, AnimationPlaybackControls } from 'framer-motion'
import React, { FC, useEffect, useRef } from 'react'

interface AnimatedNumberCountProps {
  from: number
  to: number
}

const AnimatedCounter: FC<AnimatedNumberCountProps> = ({ from, to }): JSX.Element => {
  const nodeRef = useRef<HTMLParagraphElement>(null)
  let controls: AnimationPlaybackControls | null = null

  useEffect(() => {
    const node = nodeRef.current

    if (!node) return

    controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        if (node) node.textContent = value.toFixed(2)
      }
    })

    return () => {
      if (controls) controls.stop()
    }
  }, [from, to])

  return <span ref={nodeRef} />
}

export default AnimatedCounter
