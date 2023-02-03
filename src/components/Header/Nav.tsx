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
  const [blockScroll, setBlockScroll] = React.useState(false)

  const [scrollInfo, setScrollInfo] = React.useState({
    documentScroll: 0,
    about: 100,
    experience: 200,
    projects: 300,
    technologies: 400,
    contact: 500,
  })

  React.useEffect(() => {
    window.onscroll = () => {
      setScrollInfo({
        documentScroll: document.documentElement.scrollTop,
        about: document.getElementById('about-me')?.offsetTop || 0,
        experience: document.getElementById('experience')?.offsetTop || 0,
        projects: document.getElementById('projects')?.offsetTop || 0,
        technologies: document.getElementById('technologies')?.offsetTop || 0,
        contact: document.getElementById('contact')?.offsetTop || 0,
      })
    }
  }, [])

  React.useEffect(() => {
    if (!blockScroll) {
      if (
        scrollInfo.documentScroll + 140 <
        scrollInfo.experience - scrollInfo.about
      ) {
        dispatch({ activeLink: '#about-me' })
      }

      if (scrollInfo.documentScroll + 140 > scrollInfo.experience) {
        dispatch({ activeLink: '#experience' })
      }

      if (scrollInfo.documentScroll + 140 > scrollInfo.projects) {
        dispatch({ activeLink: '#projects' })
      }

      if (scrollInfo.documentScroll + 140 > scrollInfo.technologies) {
        dispatch({ activeLink: '#technologies' })
      }

      if (scrollInfo.documentScroll + 140 > scrollInfo.contact) {
        dispatch({ activeLink: '#contact' })
      }
    } else {
      setTimeout(() => setBlockScroll(false), 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollInfo, blockScroll])

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
            onClick={() => {
              setBlockScroll(true)
              dispatch({ activeLink: link.href })
            }}
            className={c(
              'px-6 py-6 font-semibold',
              state.activeLink === link.href
                ? 'border-b-2 border-pink-600'
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
