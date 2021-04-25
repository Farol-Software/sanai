import Head from 'next/head'
import { PageHero, About, Numbers, Why } from '../components/home'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Sanai Portas | Principal</title>
      </Head>
      <PageHero />
      <About />
      <Numbers />
      <Why />
    </div>
  )
}
