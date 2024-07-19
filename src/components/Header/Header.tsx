import Container from '@core/Container'
import React from 'react'
import Link from 'next/link'

import { navLinks } from '@utils/config'
import { LogoSvg } from '@core/Icons'
import { ctc } from 'hytzen-helpers'

import { NavLink } from './NavLink'
import { TbMenu } from 'react-icons/tb'
import { Nav } from './Nav'

export type State = {
  activeLink?: string
  openMobileMenu?: boolean
}

export type StateAction = Partial<State>

const reducer: React.Reducer<State, StateAction> = (prev, next) => ({
  ...prev,
  ...next,
})

const Header: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    activeLink: navLinks[0].href,
    openMobileMenu: false,
  })

  return (
    <>
      <header className="w-full fixed top-0 backdrop-blur-md border-b border-opacity-10 border-b-white z-50">
        <Container className="flex justify-between items-center">
          <Link href="/" className="py-6">
            <LogoSvg />
          </Link>

          <Nav links={navLinks} state={state} dispatch={dispatch} />
        </Container>
      </header>

      {state.openMobileMenu && (
        <div className="backdrop-blur-2xl w-[70vw] h-[100vh] fixed top-0 right-0 z-50 border-l border-opacity-10 border-l-white md:hidden">
          <button
            className="p-3 rounded-full md:hidden absolute top-4 right-8"
            onClick={() => dispatch({ openMobileMenu: !state.openMobileMenu })}
          >
            <TbMenu />
          </button>

          <div className="flex flex-col mt-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                href={link.href}
                title={link.title}
                className={ctc('px-6 py-6 font-semibold')}
                activeLink={state.activeLink}
                onLinkClick={() =>
                  dispatch({
                    openMobileMenu: false,
                    activeLink: link.href,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Header
