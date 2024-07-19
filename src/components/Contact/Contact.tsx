import React from 'react'

import { animated, useInView } from '@react-spring/web'
import { config, transitionY } from '@utils/spring'
import { Contacts } from './Contacts'

interface ContactProps {
  id?: string
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [ref, springs] = useInView(() => transitionY, config)

  return (
    <animated.div
      className="w-full flex h-screen flex-col justify-center items-center space-y-8"
      style={springs}
      ref={ref}
      id={id}
    >
      <h4 className="text-3xl font-bold">Contato</h4>

      <div className="flex items-center justify-center space-x-4">
        <Contacts />
      </div>
    </animated.div>
  )
}

export default Contact
