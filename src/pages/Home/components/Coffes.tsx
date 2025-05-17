import styles from './Coffees.module.css'
import { coffees } from '../../../data/coffees'
import { CoffeeCard } from './CoffeeCard'

export function Coffees() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nossos cafés</h2>
      <div className={styles.grid}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  )
}
