import { config, transitionXL, transitionXR, transitionY } from '@utils/spring'
import { animated, useInView } from '@react-spring/web'
import { colorfyLastWord } from '@utils/helpers'

import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGithub,
  TbBrandGmail,
} from 'react-icons/tb'

interface MeProps {
  id?: string
}

const Me: React.FC<MeProps> = ({ id }) => {
  const [refAbout, springsAbout] = useInView(() => transitionY, config)
  const [refImg, springsImg] = useInView(() => transitionXR, config)
  const [refMe, springsMe] = useInView(() => transitionXL, config)

  return (
    <>
      <div className="max-md:py-28 md:pt-48 md:pb-36 w-full max-md:space-y-8 md:space-x-20 flex max-md:flex-col items-center justify-center">
        <animated.img
          src="/me.jpeg"
          alt="Samara Carvalho"
          className="w-[250px] h-[250px] md:w-80 md:h-80 object-cover object-center rounded-full border border-purple-500"
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

          <p className="text-lg max-md:text-center">
            Desenvolvedora frontend apaixonada por criar experiências digitais
            excepcionais e enfrentar desafios que podem me impulsionar a outros
            níveis 🚀💜
          </p>
        </animated.div>
      </div>

      <animated.div
        ref={refAbout}
        style={springsAbout}
        className="space-y-10"
        id={id}
      >
        <h4 className="text-3xl font-bold text-center">
          {colorfyLastWord('Sobre mim')}
        </h4>

        <div className="max-w-screen-lg mx-auto space-y-10 flex flex-col items-center">
          <p className="text-center text-lg">
            Sou especialista em desenvolvimento de interfaces de usuário
            responsivas e intuitivas utilizando tecnologias como HTML, CSS,
            React, JavaScript e Typescript. Meu objetivo é sempre criar produtos
            que sejam visualmente atraentes, funcionais e acessíveis para todos
            os usuários. Além disso, eu valorizo muito a colaboração e a
            comunicação efetiva em equipe.
          </p>

          <p className="text-center text-lg">
            Acredito que a troca de ideias e a cooperação são essenciais para
            produzir um trabalho de qualidade. Estou sempre procurando aprender
            mais e me atualizar em relação às últimas tendências e técnicas em
            desenvolvimento frontend. Eu acredito que o aprendizado contínuo é
            crucial para uma carreira bem-sucedida.
          </p>

          <div className="space-x-4 flex items-center">
            <a
              href="https://instagram.com/samcarvalhos"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 hover:bg-pink-500 rounded-full transition-all"
            >
              <TbBrandInstagram />
            </a>
            <a
              href="mailto:samcarvalhos@hotmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 hover:bg-red-500 rounded-full transition-all"
            >
              <TbBrandGmail />
            </a>
            <a
              href="https://github.com/scarvalhos"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-all"
            >
              <TbBrandGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samcarvalhos/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 hover:bg-blue-600 rounded-full transition-all"
            >
              <TbBrandLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5527999021768"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 hover:bg-green-500 rounded-full transition-all"
            >
              <TbBrandWhatsapp />
            </a>
          </div>
        </div>
      </animated.div>
    </>
  )
}

export default Me
