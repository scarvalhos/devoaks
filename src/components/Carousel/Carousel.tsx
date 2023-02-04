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

const Carousel: React.FC<CarouselProps> = ({ data, id, title }) => {
  const [active, setActive] = React.useState(0)

  const [ref, springs] = useInView(() => transitionY, config)

  return (
    <animated.div style={springs} ref={ref}>
      <span className="flex justify-between items-center">
        <h4 id={id} className="text-3xl font-bold">
          {title}
        </h4>

        <div className="lg:hidden space-x-4">
          <button
            onClick={() => active !== 0 && setActive(active - 1)}
            className="backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3"
          >
            <TbArrowLeft />
          </button>
          <button
            onClick={() => active < data.length - 1 && setActive(active + 1)}
            className="backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3"
          >
            <TbArrowRight />
          </button>
        </div>
      </span>

      <div className="relative">
        <button
          onClick={() => active !== 0 && setActive(active - 1)}
          className="hidden lg:block backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3 absolute -left-16 top-[160px] -translate-y-[50%] z-50"
        >
          <TbArrowLeft />
        </button>

        <div className="py-6">
          <div className="flex space-x-10">
            {data.slice(active, active + 1).map((d) => (
              <div
                key={d.image}
                className={c(
                  'border border-opacity-10 border-white backdrop-blur-md w-full flex flex-col-reverse md:flex-row justify-between rounded-lg relative shadow-lg'
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
              </div>
            ))}
          </div>

          <button
            onClick={() => active < data.length - 1 && setActive(active + 1)}
            className="hidden lg:block backdrop-blur-md border border-opacity-10 border-white hover:bg-purple-500 transition-all rounded-full p-3 absolute -right-16 top-[160px] -translate-y-[50%] z-50"
          >
            <TbArrowRight />
          </button>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-16 space-x-4">
          {data.map((d, i) => (
            <div
              key={d.title}
              className={c(
                'w-2 h-2 rounded-full transition-all',
                active === i ? 'bg-pink-500' : 'bg-gray-800'
              )}
            />
          ))}
        </div>
      </div>
    </animated.div>
  )
}

export default Carousel
