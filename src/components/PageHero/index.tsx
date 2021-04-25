import { FiDollarSign, FiSmile, FiClock } from 'react-icons/fi'
import Hero from '../shared/Hero'
import styles from './styles.module.scss'

const PageHero: React.FC = () => {
  return (
    <Hero image="/hero.jpg">
      <section className={styles.container}>
        <h1>
          Somos uma empresa especializada em portas de enrolar automáticas
        </h1>
        <section>
          <div>
            <FiDollarSign />
            <h2>Preço competitivo</h2>
          </div>
          <div>
            <FiClock />
            <h2>Entrega no prazo</h2>
          </div>
          <div>
            <FiSmile />
            <h2>Satisfação garantida</h2>
          </div>
        </section>
      </section>
    </Hero>
  )
}

export default PageHero
