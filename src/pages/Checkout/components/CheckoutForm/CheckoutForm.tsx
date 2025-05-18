import styles from './CheckoutForm.module.css'
import { useOrder } from '../../../../contexts/OrderContext'
import { useState } from 'react'
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
export function CheckoutForm() {
  const { setAddress, setPayment } = useOrder()
  const [form, setForm] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })
  const [payment, setPaymentLocal] = useState<'credit' | 'debit' | 'money' | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handlePayment(method: 'credit' | 'debit' | 'money') {
    setPaymentLocal(method)
    setPayment(method)
  }

  function handleBlur() {
    if (form.street && form.number && form.city && form.state) {
      setAddress(form)
    }
  }

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
          <input
            type="text"
            placeholder="Rua"
            className={styles.full}
            name="street"
            value={form.street}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Número"
              name="number"
              value={form.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="text"
              placeholder="Complemento"
              className={styles.optional}
              name="complement"
              value={form.complement}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Bairro"
              name="neighborhood"
              value={form.neighborhood}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="text"
              placeholder="Cidade"
              name="city"
              value={form.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="text"
              placeholder="UF"
              className={styles.uf}
              name="state"
              value={form.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
            className={`${styles.paymentButton} ${payment === 'credit' ? styles.active : ''}`}
            onClick={() => handlePayment('credit')}
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </button>
          <button
            type="button"
            className={`${styles.paymentButton} ${payment === 'debit' ? styles.active : ''}`}
            onClick={() => handlePayment('debit')}
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </button>
          <button
            type="button"
            className={`${styles.paymentButton} ${payment === 'money' ? styles.active : ''}`}
            onClick={() => handlePayment('money')}
          >
            <Money size={16} />
            DINHEIRO
          </button>
        </div>
      </div>
    </div>
  )
}
