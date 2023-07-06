import styles from './Header.module.css';

export function Header(){
  return(
    <header className={styles.header}>
      <img src='./src/assets/header.svg' alt="" />
      <h1>to<span>do</span></h1>
    </header>
  )
}