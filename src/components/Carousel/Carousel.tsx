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
    <animated.div
      id={id}
      style={springs}
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center space-y-20"
    >
      <h4 className="text-3xl text-center font-bold">
        {colorfyFirstWord(title)}
      </h4>

      <div className="flex space-x-10">
        {data.slice(active, active + itemsPerPage).map((project) => (
          <div
            key={project.image}
            className={ctc(
              'backdrop-blur-md flex-1 flex flex-col-reverse justify-between rounded-lg relative shadow-lg',
              project.image
                ? 'border border-opacity-10 border-white'
                : 'border-none'
            )}
          >
            <div className="flex items-start justify-between flex-col gap-6 px-12 py-8">
              <div className="flex flex-col gap-2">
                <p className="text-pink-500">{project.period}</p>

                <p className="font-semibold text-2xl">{project.title}</p>

                <p className="text-slate-400">{project.description}</p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1"
                >
                  <p className="bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                    Acessar
                  </p>
                  <TbLink className="text-purple-500" />
                </a>
              )}
            </div>

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={480}
                height={280}
                className={ctc(
                  'w-full h-full md:h-[200px] bg-neutral-800 rounded-lg object-cover shadow-lg',
                  !project.image && 'animate-pulse'
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
