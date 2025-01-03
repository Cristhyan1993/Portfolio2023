'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cris | Web Developer</title>
        <meta name='description' content='Cris Calderon Portfolio'/>
        <link rel='icon' href="/favicon.ico"/>
      </Head>
     <Main/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </>
  )
}
