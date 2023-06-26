import { NavLink, NavLinkType } from './NavLink'
import { State, StateAction } from './Header'
import { TbMenu } from 'react-icons/tb'
import { ctc } from 'hytzen-helpers'

import React from 'react'

interface NavProps {
  links: NavLinkType[]
  dispatch: React.Dispatch<StateAction>
  state: State
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
          <NavLink
            key={link.title}
            href={link.href}
            title={link.title}
            activeLink={state.activeLink}
            onLinkClick={() => dispatch({ activeLink: link.href })}
            className={ctc('px-6 py-6 font-semibold relative')}
          />
        ))}
      </span>
    </nav>
  )
}
