import styles from './button.module.css'

export default function Button ({children}) {
  return (<button className={styles.btn}>
      {children}
  </button>)
}