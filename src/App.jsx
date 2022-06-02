import { Header } from './components/Header'
import './styles/styles.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          posts
        </main>
      </div>
    </div>
  )
}


