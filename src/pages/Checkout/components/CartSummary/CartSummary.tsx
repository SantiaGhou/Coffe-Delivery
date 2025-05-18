import styles from './CartSummary.module.css'
import { Trash } from 'phosphor-react'
import { useOrder } from '../../../../contexts/OrderContext'
import { useNavigate } from 'react-router-dom'

export function CartSummary() {
  const { order, setCart } = useOrder()
  const navigate = useNavigate()

  function handleQuantity(id: number, delta: number) {
    setCart(
      order.cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  function handleRemove(id: number) {
    setCart(order.cart.filter(item => item.id !== id))
  }

  const total = order.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={styles.container}>
      {order.cart.map(item => (
        <div className={styles.coffeeItem} key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className={styles.details}>
            <span>{item.name}</span>
            <div className={styles.actions}>
              <div className={styles.quantity}>
                <button onClick={() => handleQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantity(item.id, 1)}>+</button>
              </div>
              <button className={styles.remove} onClick={() => handleRemove(item.id)}>
                <Trash size={16} />
                REMOVER
              </button>
            </div>
          </div>
          <strong>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
        </div>
      ))}
      <div className={styles.total}>
        <div><span>Total de itens</span><span>R$ {total.toFixed(2).replace('.', ',')}</span></div>
        <div><span>Entrega</span><span>R$ 3,50</span></div>
        <div className={styles.totalFinal}><span>Total</span><span>R$ {(total + 3.5).toFixed(2).replace('.', ',')}</span></div>
      </div>
      <button className={styles.confirm} onClick={() => navigate('/sucess')}>
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}