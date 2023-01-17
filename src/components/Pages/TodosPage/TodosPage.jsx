import { Link } from 'react-router-dom'
import { TodoList } from '../../TodoList/TodoList'

export function TodosPage() {
  return (
    <>
      <Link to="./create" className="btn btn-primary">
        Create
      </Link>

      <TodoList />
    </>
  )
}
