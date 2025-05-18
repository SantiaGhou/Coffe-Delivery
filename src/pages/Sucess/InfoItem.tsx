import { type ReactNode } from 'react'
import styles from './InfoItem.module.css'

interface InfoItemProps {
  icon: ReactNode
  bgColor: string
  children: ReactNode
}

export function InfoItem({ icon, bgColor, children }: InfoItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.icon} style={{ background: bgColor }}>
        {icon}
      </span>
      <div>{children}</div>
    </div>
  )
}