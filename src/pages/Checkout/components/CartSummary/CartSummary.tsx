import styles from './CartSummary.module.css'
import { Trash } from 'phosphor-react'
import { coffees } from '../../../../data/coffees'
export function CartSummary() {
  // Exemplo: pegando o expresso e o latte do array
  const expresso = coffees.find(c => c.name === 'Expresso Tradicional')
  const latte = coffees.find(c => c.name === 'Latte')

  return (
    <div className={styles.container}>
      <div className={styles.coffeeItem}>
        <img src={expresso?.image} alt="Expresso" />
        <div className={styles.details}>
          <span>{expresso?.name}</span>
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={styles.remove}>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
        <strong>R$ {expresso?.price.toFixed(2).replace('.', ',')}</strong>
      </div>

      <div className={styles.coffeeItem}>
        <img src={latte?.image} alt="Latte" />
        <div className={styles.details}>
          <span>{latte?.name}</span>
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={styles.remove}>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
        <strong>R$ {latte?.price.toFixed(2).replace('.', ',')}</strong>
      </div>

      <div className={styles.total}>
        <div><span>Total de itens</span><span>R$ 29,70</span></div>
        <div><span>Entrega</span><span>R$ 3,50</span></div>
        <div className={styles.totalFinal}><span>Total</span><span>R$ 33,20</span></div>
      </div>

      <button className={styles.confirm}>CONFIRMAR PEDIDO</button>
    </div>
  )
}