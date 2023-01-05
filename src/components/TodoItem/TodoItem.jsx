import styles from './todoItem.module.css'

export function TodoItem({
  title,
  id,
  index,
  completed,
  deleteTodo,
  changeStatusTodo,
}) {
  const completeHandler = () => {
    changeStatusTodo(id)
  }

  const deleteHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? styles.done : ''}>
        {index + 1}
        .
        {title}
      </span>
      <div>
        <button
          onClick={completeHandler}
          type="button"
          className={`btn btn-${completed ? 'primary' : 'success'} mx-2`}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  )
}