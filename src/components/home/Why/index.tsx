import {
  FiPenTool,
  FiPackage,
  FiRotateCw,
  FiLayers,
  FiTruck,
  FiGlobe,
} from 'react-icons/fi'
import styles from './styles.module.scss'

const Why: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>
        <mark>Por Que Nos Contratar?</mark>
      </h1>
      <h2>
        Nós entendemos sua necessidade e fornecemos portas de enrolar de acordo
        com sua solicitação!
      </h2>

      <div>
        <div>
          <FiPenTool />
          <p>Produtos de longa durabilidade</p>
        </div>
        <div>
          <FiPackage />
          <p>Soluções inovadoras</p>
        </div>
        <div>
          <FiRotateCw />
          <p>Flexibilidade na execução de serviços</p>
        </div>
        <div>
          <FiLayers />
          <p>Matéria prima de alta qualidade</p>
        </div>
        <div>
          <FiGlobe />
          <p>Garantia na compra dos produtos</p>
        </div>
        <div>
          <FiTruck />
          <p>Comprometimento do início ao fim do projeto</p>
        </div>
      </div>
    </section>
  )
}

export default Why
