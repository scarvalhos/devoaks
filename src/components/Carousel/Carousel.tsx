/* eslint-disable @next/next/no-img-element */
import { ctc, generateArrayOfNumbers, useBreakpoint } from 'hytzen-helpers'
import { animated, useInView } from '@react-spring/web'
import { transitionY, config } from '@utils/spring'
import { colorfyFirstWord } from '@utils/helpers'
import { TbLink } from 'react-icons/tb'

import Image from 'next/image'
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

const Carousel: React.FC<CarouselProps> = ({ data: _data, id, title }) => {
  const [ref, springs] = useInView(() => transitionY, config)
  const [active, setActive] = React.useState(0)

  const { md, lg, sm } = useBreakpoint()

  const notMobileItemsPerPage = lg ? 3 : 2

  const itemsPerPage = !sm ? 1 : notMobileItemsPerPage
  const pageStart = md ? 1 : notMobileItemsPerPage

  const data = React.useMemo(
    () =>
      _data.length % notMobileItemsPerPage !== 0
        ? _data.concat({} as any)
        : _data,
    [_data, notMobileItemsPerPage]
  )

  return (
    <animated.div id={id} style={springs} ref={ref} className="space-y-20">
      <span className="flex justify-center items-center">
        <h4 className="text-3xl text-center font-bold">
          {colorfyFirstWord(title)}
        </h4>
      </span>

      <div className="flex space-x-10">
        {data.slice(active, active + itemsPerPage).map((d) => (
          <div
            key={d.image}
            className={ctc(
              'backdrop-blur-md flex-1 flex flex-col-reverse justify-between rounded-lg relative shadow-lg',
              d.image ? 'border border-opacity-10 border-white' : 'border-none'
            )}
          >
            <div className="space-y-4 px-12 py-8 flex items-start justify-between flex-col">
              <span>
                <p className="text-pink-500">{d.period}</p>

                <p className="font-semibold text-2xl">{d.title}</p>

                <p>{d.description}</p>
              </span>

              {d.link && (
                <a
                  href={d.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 bg-gradient-to-tr from-pink-500 to-purple-600 font-semibold px-6 py-2 rounded-full"
                >
                  <p>Acessar</p>
                  <TbLink />
                </a>
              )}
            </div>

            {d.image ? (
              <Image
                src={d.image}
                alt={d.title}
                width={480}
                height={280}
                className={ctc(
                  'w-full h-full md:h-[280px] bg-neutral-800 rounded-lg object-cover shadow-lg',
                  !d.image && 'animate-pulse'
                )}
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6 md:mt-16 space-x-4">
        {generateArrayOfNumbers(pageStart, data.length / itemsPerPage).map(
          (d, i) => (
            <div
              key={d}
              className={ctc(
                'w-7 h-7 rounded-full transition-all flex items-center justify-center cursor-pointer hover:brightness-125',
                active === i * itemsPerPage
                  ? 'bg-pink-500'
                  : 'bg-gray-800 text-gray-500'
              )}
              onClick={() => setActive(i * itemsPerPage)}
            >
              {i + 1}
            </div>
          )
        )}
      </div>
    </animated.div>
  )
}

export default Carousel
