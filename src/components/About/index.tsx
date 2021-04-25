import styles from './styles.module.scss'

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <article>
        <h1>
          <mark>Sobre Nós</mark>
        </h1>
        <p>
          Somos uma empresa especializada na produção, manutenção e vendas de{' '}
          <strong>porta de enrolar automáticas</strong> para indústrias,
          comércio e residências.
        </p>
        <p>
          Temos uma equipe de profissionais qualificados e comprometidos, sempre
          prontos para atender a necessidade de nossos clientes. Nossos produtos
          são de fabricação própria, priorizando sempre pela qualidade e a
          agilidade na realização dos nossos serviços.
        </p>
      </article>
      <img src="/ellipse.png" alt="Sobre nós" />
    </section>
  )
}

export default About
