import styles from './CheckoutForm.module.css'
import { useState } from 'react'
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
export function CheckoutForm() {
  const [selected, setSelected] = useState<'credit' | 'debit' | 'money' | null>(null)

  return (
    <div className={styles.container}>
      {/* Endereço */}
      <div className={styles.box}>
        <div className={styles.header}>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>

        <div className={styles.form}>
          <input type="text" placeholder="CEP" className={styles.cep} />
          <input type="text" placeholder="Rua" className={styles.full} />
          <div className={styles.row}>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" className={styles.optional} />
          </div>
          <div className={styles.row}>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" className={styles.uf} />
          </div>
        </div>
      </div>

      {/* Pagamento */}
      <div className={styles.box}>
        <div className={styles.header}>
          <CurrencyDollar size={22} color="#8047F8" />
          <div>
            <h4>Pagamento</h4>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </div>

        <div className={styles.paymentMethods}>
          <button
            type="button"
            className={`${styles.paymentButton} ${selected === 'credit' ? styles.active : ''}`}
            onClick={() => setSelected('credit')}
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </button>
          <button
            type="button"
            className={`${styles.paymentButton} ${selected === 'debit' ? styles.active : ''}`}
            onClick={() => setSelected('debit')}
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </button>
          <button
            type="button"
            className={`${styles.paymentButton} ${selected === 'money' ? styles.active : ''}`}
            onClick={() => setSelected('money')}
          >
            <Money size={16} />
            DINHEIRO
          </button>
        </div>
      </div>
    </div>
  )
}
