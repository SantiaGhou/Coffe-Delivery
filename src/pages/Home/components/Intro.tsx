import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import styles from './Intro.module.css'
import Typed from 'typed.js' 
import { useEffect, useRef } from 'react'

export function Intro() {
  const typedRef = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Alegrar',
        'O seu Dia',
        'Desenvolver',
        'Você'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    }

    typedRef.current = new Typed('.typed-text', options)

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className={styles.intro}>
      <div className={styles.TextItems}>
        {/* Título e parágrafo */}
        <div>
          <h1 className={styles.title}>Encontre o café perfeito para <span className="typed-text"></span></h1>
          <p className={styles.paragraph}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>

        {/* Lista de Itens */}
        <div className={styles.list}>
          <div className={styles.listItem}>
            <span className={`${styles.icon} ${styles.yellowDark}`}>
              <ShoppingCart weight="fill" size={16} />
            </span>
            Compra simples e segura
          </div>
          <div className={styles.listItem}>
            <span className={`${styles.icon} ${styles.baseText}`}>
              <Package weight="fill" size={16} />
            </span>
            Embalagem mantém o café intacto
          </div>
          <div className={styles.listItem}>
            <span className={`${styles.icon} ${styles.yellow}`}>
              <Timer weight="fill" size={16} />
            </span>
            Entrega rápida e rastreada
          </div>
          <div className={styles.listItem}>
            <span className={`${styles.icon} ${styles.purple}`}>
              <Coffee weight="fill" size={16} />
            </span>
            O café chega fresquinho até você
          </div>
        </div>
      </div>

      {/* Imagem do cafezão */}
      <div className={styles.image}>
        <img src="src/assets/CoffeImage.png" alt="Café" />
      </div>
    </section>
  )
}