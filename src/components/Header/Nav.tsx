import { animated, useSpring } from '@react-spring/web'
import { StateProps } from './Header'
import { TbMenu } from 'react-icons/tb'
import { c } from '@utils/tailwind-utils'

import React from 'react'

interface NavProps {
  links: {
    title: string
    href: string
  }[]
  dispatch: React.Dispatch<StateProps>
  state: StateProps
}

export const Nav: React.FC<NavProps> = ({ links, dispatch, state }) => {
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      width: '0',
    },
    to: {
      opacity: 1,
      width: '100%',
    },
  }))

  const handleClick = (link: string) => {
    dispatch({ activeLink: link })

    return api.start({
      from: {
        opacity: 0,
        width: '0',
      },
      to: {
        opacity: 1,
        width: '100%',
      },
    })
  }

  return (
    <nav>
      <button
        className="p-3 rounded-full md:hidden"
        onClick={() => dispatch({ openMobileMenu: !state.openMobileMenu })}
      >
        <TbMenu />
      </button>

      <span className="hidden md:block">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={() => handleClick(link.href)}
            className={c('px-6 py-6 font-semibold relative')}
          >
            {link.title}
            {state.activeLink === link.href && (
              <animated.div
                style={{
                  ...springs,
                }}
                className="rounded-t-lg w-[100%] h-1 bg-pink-500 absolute -bottom-1 left-0"
              />
            )}
          </a>
        ))}
      </span>
    </nav>
  )
}
