import { useQuery } from '@tanstack/react-query'
import { useTodoListContext } from '../../contexts/TodoListContextProvider'
import { TodoListItem } from '../TodoListItem/TodoListItem'

export function TodoList() {
  console.log('Render TodoList')
  const todos = useTodoListContext()

  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: ['todoListFetch'],
    queryFn: () => fetch('http://localhost:3005/todos').then((res) => res.json),
  })

  console.log({
    data, isLoading, isError, error, refetch,
  })

  if (!todos.length) {
    return <p>List is empty...</p>
  }

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          index={index}
          completed={todo.completed}

        />
      ))}
    </ul>
  )
}
