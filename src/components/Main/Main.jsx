import { TodoList } from '../TodoList/TodoList'
import mainStyles from './main.module.css'

export function Main({ todos, deleteTodo, changeStatusTodo }) {
  return (
    <main className={mainStyles.wr}>
      <TodoList todos={todos} deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo} />
    </main>
  )
}
