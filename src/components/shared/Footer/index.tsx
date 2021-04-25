import styles from './styles.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Powered with Next Desenvolvido por{' '}
        <a href="https://www.hugolyra.com">hugolyra.com</a>
      </p>
    </footer>
  )
}

export default Footer
