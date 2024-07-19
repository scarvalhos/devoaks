import Technologies from '@components/Technologies'
import Container from '@core/Container'
import Timeline from '@components/Timeline'
import Carousel from '@components/Carousel'
import Contact from '@components/Contact'
import Header from '@components/Header'
import React from 'react'
import Me from '@components/Me'

import { experience, projects, technologies } from '@utils/config'
import { BackgroundVideo } from '@components/BackgroundVideo'
import { NextSeo } from 'next-seo'
import { useBreakpoint } from 'hytzen-helpers'

export default function Home() {
  const { md } = useBreakpoint()

  return (
    <>
      <NextSeo
        title="Samara Carvalho - Frontend Developer"
        description="Desenvolvedora frontend apaixonada por criar experiências digitais
            excepcionais e enfrentar desafios que podem me impulsionar a outros
            níveis"
      />

      <Header />

      {md ? <BackgroundVideo /> : null}

      <Container className="w-full">
        <Me.Home id="about-me-home" />

        <Me.Description id="about-me-description" />

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

        <Contact id="contact" />
      </Container>
    </>
  )
}
