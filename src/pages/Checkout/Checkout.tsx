import { Header } from '../../components/Header'
import styles from './Checkout.module.css'
import { CartSummary } from './components/CartSummary/CartSummary'
import { CheckoutForm } from './components/CheckoutForm/CheckoutForm'


export function Checkout() {
  return (
    <>
    <Header/>
    <main className={styles.container}>
      <form className={styles.form}>
        <CheckoutForm />
      </form>

      <aside className={styles.summary}>
        <CartSummary />
      </aside>
    </main>
  </>
)

}
