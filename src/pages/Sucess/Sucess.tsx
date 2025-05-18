import styles from './Sucess.module.css'
import { InfoItem } from './InfoItem'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import Illustration from '../../assets/Illustration.png'
import { useOrder } from '../../contexts/OrderContext'
import { Header } from '../../components/Header'

export function Sucess() {
  const { order } = useOrder()

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.infoSection}>
          <h1 className={styles.title}>Uhu! Pedido confirmado</h1>
          <p className={styles.subtitle}>
            Agora é só aguardar que logo o café chegará até você
          </p>
          <div className={styles.card}>
            <InfoItem icon={<MapPin weight="fill" size={20} />} bgColor="#8047F8">
              Entrega em <strong>{order.address?.street}, {order.address?.number}</strong><br />
              {order.address?.neighborhood} - {order.address?.city}, {order.address?.state}
            </InfoItem>
            <InfoItem icon={<Clock weight="fill" size={20} />} bgColor="#DBAC2C">
              Previsão de entrega<br />
              <strong>20 min - 30 min</strong>
            </InfoItem>
            <InfoItem icon={<CurrencyDollar weight="fill" size={20} />} bgColor="#C47F17">
              Pagamento na entrega<br />
              <strong>
                {order.payment === 'credit' && 'Cartão de Crédito'}
                {order.payment === 'debit' && 'Cartão de Débito'}
                {order.payment === 'money' && 'Dinheiro'}
              </strong>
            </InfoItem>
          </div>
        </section>
        <img src={Illustration} alt="Entrega" className={styles.illustration} />
      </div>
    </>
  )
}