import { TbLink } from 'react-icons/tb'
import { c } from '@utils/tailwind-utils'

import Image from 'next/image'

interface TimelineProps {
  id: string
  title: string
  data: {
    period?: string
    title: string
    description: string
    image: string
    link: string
  }[]
}

const Timeline: React.FC<TimelineProps> = ({ title, data, id }) => {
  return (
    <>
      <h4 id={id} className="text-3xl font-bold">
        {title}
      </h4>

      <div className="flex space-x-10 py-6">
        <div className="hidden md:block space-y-14 w-full">
          {data.map((d) => (
            <Image
              key={d.image}
              src={d.image}
              alt={d.title}
              width={460}
              height={242}
              className={c(
                'w-[460px] h-[242px] bg-neutral-800 rounded-lg object-cover',
                !d.image && 'animate-pulse'
              )}
            />
          ))}
        </div>

        <div
          className="border-l-2 border-dashed border-spacing-4 border-neutral-800 w-1 relative"
          style={{
            height: data.length * 300,
          }}
        >
          {data.map((d) => (
            <div
              key={d.title}
              className="w-4 h-4 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 absolute -translate-x-2"
              style={{
                top: data.findIndex((i) => i.title === d.title) * 300,
              }}
            />
          ))}
        </div>

        <div className="relative w-full">
          {data.map((d) => (
            <div
              key={d.image}
              className="absolute flex flex-col space-y-8"
              style={{
                top: data.findIndex((i) => i.title === d.title) * 300,
              }}
            >
              <span className="space-y-2">
                <p className="text-purple-500">{d.period}</p>

                <p className="font-semibold text-xl">{d.title}</p>

                <p>{d.description}</p>
              </span>

              {d.link && (
                <a
                  href={d.link}
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
          ))}
        </div>
      </div>
    </>
  )
}

export default Timeline
