import { config, transitionXL, transitionXR } from '@utils/spring'
import { animated, useInView } from '@react-spring/web'
import { colorfyLastWord } from '@utils/helpers'
import { TbLink } from 'react-icons/tb'
import { ctc } from 'hytzen-helpers'

import React from 'react'

interface DataProps {
  description: string
  period: string
  image: string
  title: string
  link: string
}

// ----------------------------------------------------------------

interface AnimatedImgProps {
  image?: string
  title?: string
}

const AnimatedImg: React.FC<AnimatedImgProps> = ({ title, image }) => {
  const [ref, springs] = useInView(() => transitionXR, config)

  return (
    <animated.img
      ref={ref}
      src={image}
      alt={title}
      style={springs}
      className={ctc(
        'w-full h-[242px] bg-neutral-800 rounded-lg object-cover',
        !image && 'animate-pulse'
      )}
    />
  )
}

// ----------------------------------------------------------------

interface AnimatedContentProps {
  description: string
  period: string
  title: string
  link: string
  data: DataProps[]
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  description,
  period,
  title,
  link,
  data,
}) => {
  const [ref, springs] = useInView(() => transitionXL, config)

  return (
    <animated.div
      className="absolute flex flex-col space-y-8"
      ref={ref}
      style={{
        top: data.findIndex((i) => i.title === title) * 300,
        ...springs,
      }}
    >
      <span className="space-y-2">
        <p className="text-purple-500">{period}</p>

        <p className="font-semibold text-xl">{title}</p>

        <p className="truncate">{description}</p>
      </span>

      {link && (
        <a
          href={link}
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
    </animated.div>
  )
}

// ----------------------------------------------------------------

interface TimelineProps {
  id?: string
  title: string
  data: DataProps[]
}

const Timeline: React.FC<TimelineProps> = ({ title, data, id }) => {
  return (
    <div id={id} className="space-y-20">
      <h4 className="text-3xl text-center font-bold">
        {colorfyLastWord(title)}
      </h4>

      <div className="flex space-x-10">
        <div className="hidden md:block space-y-14 w-full">
          {data.map((d) => {
            return <AnimatedImg key={d.image} title={d.title} image={d.image} />
          })}
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
          {data.map((d, i) => (
            <AnimatedContent
              key={d.image}
              title={d.title}
              data={data}
              link={d.link}
              description={d.description}
              period={d.period}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
