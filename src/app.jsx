import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Nílton Silva Ferreira" 
            content="Lorem ipsum dolor sit amet consectetur adpisicing elit." 
          />
          <Post 
            author="Silva Ferreira Nilton"
            content="um novo post muito maneiro"
          />
        </main>
      </div>
    </div>
  )
}
