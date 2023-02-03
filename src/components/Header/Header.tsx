import Container from '@core/Container'
import React from 'react'

import { navLinks } from '@utils/config'
import { LogoSvg } from '@core/Icons'
import { TbMenu } from 'react-icons/tb'
import { Nav } from './Nav'
import { c } from '@utils/tailwind-utils'

export interface StateProps {
  activeLink?: string
  openMobileMenu?: boolean
}

const Header: React.FC = () => {
  const [state, dispatch] = React.useReducer(
    (prev: StateProps, next: StateProps) => {
      return { ...prev, ...next }
    },
    {
      activeLink: navLinks[0].href,
      openMobileMenu: false,
    }
  )

  return (
    <>
      <header className="w-full fixed top-0 backdrop-blur-md border-b border-opacity-10 border-b-white z-50">
        <Container className="flex justify-between items-center">
          <span className="py-6">
            <LogoSvg />
          </span>

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
              <a
                key={link.title}
                href={link.href}
                onClick={() =>
                  dispatch({
                    openMobileMenu: false,
                  })
                }
                className={c('px-6 py-6 font-semibold')}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Header
