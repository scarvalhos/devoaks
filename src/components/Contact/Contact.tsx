import React from 'react'

import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb'

import { animated, useInView } from '@react-spring/web'
import { config, transitionY } from '@utils/spring'

interface ContactProps {
  id?: string
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [ref, springs] = useInView(() => transitionY, config)

  return (
    <animated.div
      className="w-full flex h-[60vh] flex-col justify-center items-center space-y-8"
      style={springs}
      ref={ref}
      id={id}
    >
      <h4 className="text-3xl font-bold">Contato</h4>

      <div className="flex items-center justify-center space-x-4">
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
    </animated.div>
  )
}

export default Contact
