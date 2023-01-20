import { useQuery } from '@tanstack/react-query'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import { withQuery } from '../HOCs/withQuery'

function TodoListInner({ todos }) {
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

const TodoListInnerWithQuery = withQuery(TodoListInner)

export function TodoList() {
  console.log('Render TodoList')

  const {
    data: todos, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: ['TodoListFetch'],
    queryFn: () => fetch('http://localhost:3005/todos').then((res) => {
      if (res.status >= 400 && res.status < 500) {
        throw new Error(`Произошла ошибка при получении списка задач. 
        Проверьте отправляемые данные. Status: ${res.status}`)
      }

      if (res.status >= 500) {
        throw new Error(`Произошла ошибка при получении списка задач. 
        Попробуйте сделать запрос позже. Status: ${res.status}`)
      }

      return res.json()
    }),
  })

  return (
    <TodoListInnerWithQuery
      todos={todos}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  )
}
