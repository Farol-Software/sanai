import Head from 'next/head'
import { PageHero, About } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Sanai Portas | Principal</title>
      </Head>
      <PageHero />
      <About />
    </div>
  )
}
