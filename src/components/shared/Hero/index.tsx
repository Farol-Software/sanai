import styles from './styles.module.scss'

interface HeroProps {
  children?: JSX.Element
  image: string
}

const Hero: React.FC<HeroProps> = ({ children, image }): JSX.Element => {
  return (
    <div className={styles.hero}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Hero
