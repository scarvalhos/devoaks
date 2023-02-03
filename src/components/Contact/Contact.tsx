import React from 'react'

import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandWhatsapp,
} from 'react-icons/tb'

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center items-start space-y-4 md:space-y-0 w-full">
      <div className="flex flex-col space-y-4 max-w-sm">
        <h4 className="text-3xl font-bold">Contact</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ex in mi semper porttitor.
        </p>
      </div>

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
          href="https://api.whatsapp.com/send?phone=5527999021768"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-gray-900 hover:bg-green-500 rounded-full transition-all"
        >
          <TbBrandWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default Contact
