import { Header } from '../../components/Header'
import { Coffees } from './components/Coffes'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Coffees />
    </div>
  )
}