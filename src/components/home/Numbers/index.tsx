import { FiTrendingUp, FiUserPlus, FiThumbsUp } from 'react-icons/fi'
import Hero from '../../shared/Hero'
import styles from './styles.module.scss'

const Numbers: React.FC = () => {
  return (
    <Hero image="/hero2.jpg">
      <section className={styles.container}>
        <div>
          <FiTrendingUp />
          <h2>
            <strong>+200</strong> Portas entregues
          </h2>
        </div>
        <div>
          <FiUserPlus />
          <h2>
            <strong>+100</strong> Clientes Satisfeitos
          </h2>
        </div>
        <div>
          <FiThumbsUp />
          <h2>
            <strong>+100</strong> Avaliação positivo
          </h2>
        </div>
      </section>
    </Hero>
  )
}

export default Numbers
