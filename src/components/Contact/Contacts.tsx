import React from 'react'

import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGithub,
  TbBrandGmail,
} from 'react-icons/tb'

export const Contacts: React.FC = () => {
  return (
    <React.Fragment>
      <a
        href="https://instagram.com/samcarvalhos"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-gray-900 hover:bg-pink-500 rounded-full transition-all"
        onClick={() =>
          (window as any).gtag('event', 'contact_click', {
            channel: 'instagram',
          })
        }
      >
        <TbBrandInstagram />
      </a>
      <a
        href="mailto:samcarvalhos@hotmail.com"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-gray-900 hover:bg-red-500 rounded-full transition-all"
        onClick={() =>
          (window as any).gtag('event', 'contact_click', {
            channel: 'gmail',
          })
        }
      >
        <TbBrandGmail />
      </a>
      <a
        href="https://github.com/scarvalhos"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-all"
        onClick={() =>
          (window as any).gtag('event', 'contact_click', {
            channel: 'github',
          })
        }
      >
        <TbBrandGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/samcarvalhos/"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-gray-900 hover:bg-blue-600 rounded-full transition-all"
        onClick={() =>
          (window as any).gtag('event', 'contact_click', {
            channel: 'linkedin',
          })
        }
      >
        <TbBrandLinkedin />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5527999021768"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-gray-900 hover:bg-green-500 rounded-full transition-all"
        onClick={() =>
          (window as any).gtag('event', 'contact_click', {
            channel: 'whatsapp',
          })
        }
      >
        <TbBrandWhatsapp />
      </a>
    </React.Fragment>
  )
}
