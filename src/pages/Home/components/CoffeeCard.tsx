import { useState } from 'react';
import { ShoppingCartSimple } from 'phosphor-react';
import styles from './CoffeeCard.module.css';

interface CoffeeProps { 
  coffee: {
    id: number
    name: string
    tags: string[]
    description: string
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className={styles.card}>
      <img src={coffee.image} alt={coffee.name} className={styles.image} />

      <div className={styles.tags}>
        {coffee.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <h3 className={styles.name}>{coffee.name}</h3>
      <p className={styles.description}>{coffee.description}</p>

      <footer className={styles.footer}>
        <div className={styles.price}>
          <span>R$</span>
          <strong>{coffee.price.toFixed(2)}</strong>
        </div>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className={styles.cartButton}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  );
}
