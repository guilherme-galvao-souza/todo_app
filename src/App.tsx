import './global.css'
import { Header } from "./components/Header";
import { Tasks } from './components/Tasks';
import styles from './App.module.css';

export function App(){
  return(
    <div>
      <Header/>
      <main className={styles.mainWrapper}>
        <Tasks/>
      </main>
    </div>
  )
}