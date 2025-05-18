import styles from './Sucess.module.css'
import { InfoItem } from './InfoItem'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import Illustration from '../../assets/Illustration.png'
import { Header } from '../../components/Header'

export function Sucess() {
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <section className={styles.infoSection}>
        <h1 className={styles.title}>Uhu! Pedido confirmado</h1>
        <p className={styles.subtitle}>
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className={styles.card}>
          <InfoItem icon={<MapPin weight="fill" size={20} />} bgColor="#8047F8">
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br />
            Farrapos - Porto Alegre, RS
          </InfoItem>
          <InfoItem icon={<Clock weight="fill" size={20} />} bgColor="#DBAC2C">
            Previsão de entrega<br />
            <strong>20 min - 30 min</strong>
          </InfoItem>
          <InfoItem icon={<CurrencyDollar weight="fill" size={20} />} bgColor="#C47F17">
            Pagamento na entrega<br />
            <strong>Cartão de Crédito</strong>
          </InfoItem>
        </div>
      </section>
      <img src={Illustration} alt="Entrega" className={styles.illustration} />
    </div>
    </>
  )
}