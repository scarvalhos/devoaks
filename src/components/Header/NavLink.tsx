import { animated, useSpring } from '@react-spring/web'

import React from 'react'

export type NavLinkType = {
  title: string
  href: string
}

export interface NavLinkProps extends NavLinkType {
  activeLink?: string
  onLinkClick: () => void
  className?: string
}

export const NavLink: React.FC<NavLinkProps> = ({
  title,
  href,
  className,
  activeLink,
  onLinkClick,
}) => {
  const linkRef: React.LegacyRef<HTMLAnchorElement> = React.useRef(null)

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

  const getDistanceFromTheTop = () => {
    const id = linkRef.current?.getAttribute('href')

    return (document.querySelector(id!) as any)?.offsetTop || 0
  }

  const nativeScroll = (distanceFromTheTop: number) => {
    window.scroll({
      behavior: 'smooth',
      top:
        distanceFromTheTop === 0
          ? distanceFromTheTop
          : distanceFromTheTop - 120,
    })
  }

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()

    nativeScroll(getDistanceFromTheTop())
    onLinkClick()

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
    <a
      ref={linkRef}
      href={href}
      onClick={scrollToSection}
      className={className}
    >
      {title}
      {activeLink === href && (
        <animated.div
          style={{
            ...springs,
          }}
          className="rounded-t-lg w-[100%] h-1 bg-gradient-to-tr from-purple-500 to-purple-400 absolute -bottom-1 left-0"
        />
      )}
    </a>
  )
}
