import { useState } from 'react'
import styles from './styles.module.scss'

const menuClass = (active: boolean): string => {
  return !active ? styles.menu : `${styles.menu} ${styles.menuActive}`
}

const Header = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setActive((state) => !state)
  }

  return (
    <header className={styles.headerContainer}>
      <nav>
        <img src="/logo.png" alt="Sanai Portas Logo" />

        <ul className={menuClass(active)}>
          <li>Principal</li>
          <li>Trabalhos</li>
          <li>Blog</li>

          <div className={styles.mobileContact}>
            <img src="/whats.png" alt="Whatsapp Logo" />
            <section>
              <p>Vendas/WhatsApp</p>
              <a href="https://wa.me/5581996572406">
                <strong>(81) 9 9657-2406</strong>
              </a>
            </section>
          </div>
        </ul>

        <div className={styles.contact}>
          <img src="/whats.png" alt="Whatsapp Logo" />
          <section>
            <p>Vendas/WhatsApp</p>
            <a href="https://wa.me/5581996572406">
              <strong>(81) 9 9657-2406</strong>
            </a>
          </section>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => toggleMenu()}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Header
