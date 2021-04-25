import Head from 'next/head'
import { PageHero, About, Numbers, Why, Contact } from '../components/home'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sanai Portas | Principal</title>
      </Head>
      <PageHero />
      <About />
      <Numbers />
      <Why />
      <Contact />
    </>
  )
}
