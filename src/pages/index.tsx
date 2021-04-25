import Head from 'next/head'
import PageHero from '../components/PageHero'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Sanai Portas | Principal</title>
      </Head>
      <PageHero />
    </div>
  )
}
