/* eslint-disable @next/next/no-img-element */
import { animated, useInView } from '@react-spring/web'
import { transitionY, config } from '@utils/spring'
import { colorfyLastWord } from '@utils/helpers'
import { ctc } from 'hytzen-helpers'

import React from 'react'

interface CarouselProps {
  id?: string
  title: string
  data: {
    period?: string
    title: string
    description: string
    image: string
    link: string
  }[]
}

const Technologies: React.FC<CarouselProps> = ({ data, id, title }) => {
  const [ref, springs] = useInView(() => transitionY, config)

  return (
    <animated.div
      id={id}
      style={springs}
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center space-y-20 py-44"
    >
      <div className="flex justify-center items-center">
        <h4 className="text-3xl text-center font-bold">
          {colorfyLastWord(title)}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-14 auto-rows-fr">
        {data.map((d) => (
          <div
            key={d.image}
            className={ctc(
              'backdrop-blur-md flex flex-col items-center justify-center rounded-lg relative shadow-lg gap-2 border border-opacity-30 border-stone-700 py-6 px-4 hover:border-opacity-60 select-none'
            )}
          >
            {d.image ? (
              <img
                src={d.image}
                alt={d.title}
                className={ctc(
                  'w-[42px] h-[42px] rounded-lg object-cover shadow-lg',
                  !d.image && 'animate-pulse bg-neutral-800'
                )}
              />
            ) : null}

            <p className="font-semibold text-lg">{d.title}</p>
          </div>
        ))}
      </div>
    </animated.div>
  )
}

export default Technologies
