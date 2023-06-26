import Technologies from '@components/Technologies'
import Container from '@core/Container'
import Timeline from '@components/Timeline'
import Carousel from '@components/Carousel'
import DivideY from '@core/Divide/Divide'
import Contact from '@components/Contact'
import Header from '@components/Header'
import React from 'react'
import Head from 'next/head'
import Me from '@components/Me'

import { experience, projects, technologies } from '@utils/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samara Carvalho - Frontend Developer</title>

        <meta
          name="description"
          content="Developer passionate about learning new skills and facing challenges
          that can push me to new levels."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <Container className="w-full">
        <DivideY>
          <Me id="about-me" />

          <Timeline
            id="experience"
            title="Experiência profissional"
            data={experience}
          />

          <Carousel id="projects" title="Projetos pessoais" data={projects} />

          <Technologies
            id="technologies"
            title="Principais tecnologias"
            data={technologies}
          />
        </DivideY>

        <Contact id="contact" />
      </Container>
    </>
  )
}
