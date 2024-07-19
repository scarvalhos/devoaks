import React from 'react'

import { config, transitionXL, transitionXR, transitionY } from '@utils/spring'
import { animated, useInView } from '@react-spring/web'
import { colorfyLastWord } from '@utils/helpers'
import { Contacts } from '@components/Contact/Contacts'

interface MeProps {
  id?: string
}

const MeHome: React.FC<MeProps> = ({ id }) => {
  const [refImg, springsImg] = useInView(() => transitionXR, config)
  const [refMe, springsMe] = useInView(() => transitionXL, config)

  return (
    <React.Fragment>
      <div
        id={id}
        className="w-full h-screen max-md:py-28 md:py-48 flex max-md:flex-col items-center justify-center gap-12"
      >
        <animated.img
          src="/me.jpeg"
          alt="Samara Carvalho"
          className="w-[275px] h-[275px] object-cover object-center rounded-full border border-purple-500"
          ref={refImg}
          style={springsImg}
        />

        <animated.div
          ref={refMe}
          style={springsMe}
          className="max-w-xl space-y-4"
        >
          <h1 className="max-md:text-4xl text-6xl font-extrabold tracking-tight max-md:text-center">
            Samara Carvalho
          </h1>

          <p className="text-xl max-md:text-center font-mono text-slate-200">
            Desenvolvedora de software apaixonada por criar experiências
            digitais excepcionais e enfrentar desafios que podem me levar ao
            aprendizado contínuo 🚀💜
          </p>
        </animated.div>
      </div>
    </React.Fragment>
  )
}

const MeDescription: React.FC<MeProps> = ({ id }) => {
  const [refAbout, springsAbout] = useInView(() => transitionY, config)
  const [refImg, springsImg] = useInView(() => transitionXR, config)

  return (
    <React.Fragment>
      <div
        id={id}
        className="w-full h-screen max-md:py-28 md:py-48 flex max-md:flex-col items-center justify-center gap-12 md:gap-20"
      >
        <animated.div
          ref={refAbout}
          style={springsAbout}
          className="space-y-10"
        >
          <h4 className="text-3xl font-bold">{colorfyLastWord('Sobre mim')}</h4>

          <p className="text-xl font-mono text-slate-200">
            Sou especialista em desenvolvimento full stack utilizando
            tecnologias como React, Next.js e Typescript. Contudo, não me limito
            a tecnologias. Gosto de estar em constante aprendizado, buscando me
            aprimorar para me tornar uma desenvolvedora mais completa e
            eficiente. Sou movida a desafios e valorizo entregas com agilidade e
            qualidade.
          </p>

          <div className="space-x-4 flex items-center">
            <Contacts />
          </div>
        </animated.div>

        <animated.img
          src="/rocket.gif"
          alt="Samara Carvalho"
          className="w-full md:w-[275px] h-[275px] object-cover object-center rounded-lg md:rounded-full border border-purple-500"
          ref={refImg}
          style={springsImg}
        />
      </div>
    </React.Fragment>
  )
}

export default {
  Home: MeHome,
  Description: MeDescription,
}
