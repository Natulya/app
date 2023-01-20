import { Link } from 'react-router-dom'
import { TodoList } from '../../TodoList/TodoList'

export function TodosPage() {
  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <Link to="./create" className="btn btn-primary">
          Create
        </Link>
      </div>
      <TodoList />
    </>
  )
}
