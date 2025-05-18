import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../contexts/OrderContext'

export function Header() {
  const [location, setLocation] = useState('Detectando...')
  const navigate = useNavigate()
  const { order } = useOrder()

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f37f7bf0f195441a8e165377be3c77a5`
        )
        const data = await response.json()
        const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village
        const state = data.results[0].components.state_code
        setLocation(`${city}, ${state}`)
      })
    } else {
      setLocation('Localização indisponível')
    }
  }, [])

  const cartCount = order.cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo} style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src="/Logo.svg" alt="Coffee Delivery" />
          <span className={styles.logoText}></span>
        </div>
        <div className={styles.actions}>
          <span className={styles.location}>
            <MapPin size={22} weight="fill" color="#8047F8" />
            {location}
          </span>
          <button className={styles.cart} onClick={() => navigate('/checkout')}>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}