import styles from './Pill.module.css'

interface PillProps {
  pillText: string
}

const Pill = ({ pillText }:PillProps) => {
  return (
    <div className={styles.pill}>
      {pillText}
    </div>
  )
}

export default Pill