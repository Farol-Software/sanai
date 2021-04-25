import Hero from '../../shared/Hero'
import styles from './styles.module.scss'

const Contact: React.FC = () => {
  return (
    <Hero image="/hero.jpg">
      <section className={styles.container}>
        <section>
          <div>
            <h2>Aqui para você</h2>
            <p>Ligue-nos 24/7.</p>
            <p>Estamos aqui para lhe atender</p>
          </div>
          <div>
            <h2>Contatos</h2>
            <p>(81) 9 9657-2406</p>
            <p>contato@sanaiportas.com.br</p>
          </div>
          <div>
            <h2>Onde nos encontrar</h2>
            <p>Rua Mocajuba, 23</p>
            <p>Estância, Recife - PE</p>
            <p>50865-210</p>
          </div>
        </section>
      </section>
    </Hero>
  )
}

export default Contact
