import { TodoItem } from '../TodoItem/TodoItem'

export function TodoList({ todos, deleteTodo, changeStatusTodo }) {
  if (!todos.length) {
    return <p>List is empty...</p>
  }

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          index={index}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          changeStatusTodo={changeStatusTodo}
        />
      ))}
    </ul>
  )
}
