import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Nílton Silva Ferreira" 
        content="Lorem ipsum dolor sit amet consectetur adpisicing elit." 
      />
      <Post 
        author="Silva Ferreira Nilton"
        content="um novo post muito maneiro"
      />
    </div>
  )
}
