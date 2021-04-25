/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react'
import Hero from '../../shared/Hero'
import styles from './styles.module.scss'

const Contact: React.FC = () => {
  const [response, setResponse] = useState(null)
  const form = useRef(null)

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    try {
      const data = new FormData(form.current)
      const message = {
        ...Object.fromEntries(data),
        accessKey: 'a362d62e-17c4-41c6-bed0-fc9767529a07',
      }

      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' },
      })

      const result = await res.json()
      if (!result.success) throw new Error()

      form.current.reset()
      setResponse({
        message: 'Obrigado por nos contactar!',
      })
    } catch {
      setResponse({
        message: 'Um erro aconteceu ao tentar enviar a mensagem!',
      })
    }
  }

  return (
    <Hero image="/hero.jpg">
      <section className={styles.container}>
        <section className={styles.contact}>
          <h1>
            <mark>Entre em contato</mark>
          </h1>
          <h2>Solicite um orçamento</h2>

          <div>
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div>
                <label htmlFor="sender">Nome</label>
                <input id="sender" type="text" name="$Nome" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="$Email" required />
              </div>
              <div>
                <label htmlFor="phone">Telefone</label>
                <input id="phone" type="phone" name="$Telefone" required />
              </div>
              <div>
                <label htmlFor="subject">Assunto</label>
                <input id="subject" type="text" name="subject" required />
              </div>
              <div className={styles.expand}>
                <label htmlFor="body">Mensagem</label>
                <textarea
                  id="body"
                  cols={30}
                  rows={5}
                  name="$Mensagen"
                  required
                />
              </div>
              <div className={styles.expand}>
                <button type="submit">Enviar</button>
                {response && <p>{response.message}</p>}
              </div>
            </form>
          </div>
        </section>
        <section className={styles.panel}>
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
