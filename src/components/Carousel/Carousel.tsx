import { generateArrayOfNumbers, useBreakpoint } from 'hytzen-helpers'
import { TbArrowLeft, TbArrowRight, TbLink } from 'react-icons/tb'
import { animated, useInView } from '@react-spring/web'
import { transitionY, config } from '@utils/spring'
import { c } from '@utils/tailwind-utils'

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
  const [active, setActive] = React.useState(0)

  const { md } = useBreakpoint()

  const [ref, springs] = useInView(() => transitionY, config)

  const data = React.useMemo(
    () => (_data.length % 2 !== 0 ? _data.concat({} as any) : _data),
    [_data]
  )

  const itemsPerPage = md ? 2 : 1
  const pageStart = md ? 1 : 2

  return (
    <animated.div style={springs} ref={ref}>
      <span className="flex justify-between items-center">
        <h4 id={id} className="text-3xl font-bold">
          {title}
        </h4>

        <div className="space-x-4">
          <button
            onClick={() => active !== 0 && setActive(active - itemsPerPage)}
            className="backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3"
          >
            <TbArrowLeft />
          </button>
          <button
            onClick={() =>
              active < data.length - 2 && setActive(active + itemsPerPage)
            }
            className="backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3"
          >
            <TbArrowRight />
          </button>
        </div>
      </span>

      <div className="py-6">
        <div className="flex space-x-10">
          {data.slice(active, active + itemsPerPage).map((d) => (
            <div
              key={d.image}
              className={c(
                'backdrop-blur-md flex-1 flex flex-col-reverse justify-between rounded-lg relative shadow-lg',
                d.image
                  ? 'border border-opacity-10 border-white'
                  : 'border-none'
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
                  className={c(
                    'w-full md:w-[460px] h-full md:h-[280px] bg-neutral-800 rounded-lg object-cover shadow-lg',
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
                className={c(
                  'w-2 h-2 rounded-full transition-all',
                  active === i * itemsPerPage ? 'bg-pink-500' : 'bg-gray-800'
                )}
              />
            )
          )}
        </div>
      </div>
    </animated.div>
  )
}

export default Carousel
