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
            onClick={() => dispatch({ activeLink: link.href })}
            className={c(
              'px-6 py-6 font-semibold',
              state.activeLink === link.href
                ? 'border-b-2 border-pink-500'
                : 'border-b-2 border-[transparent]'
            )}
          >
            {link.title}
          </a>
        ))}
      </span>
    </nav>
  )
}
