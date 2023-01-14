import { TodoList } from '../TodoList/TodoList'
import mainStyles from './main.module.css'

export function Main() {
  console.log('Render Main')
  return (
    <main className={mainStyles.wr}>
      MAIN PAGE
      <TodoList />
    </main>
  )
}
