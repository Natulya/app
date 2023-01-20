import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { withQuery } from '../HOCs/withQuery'
import { DeleteTodoModal } from './Modals/DeleteTodoModal/DeleteTodoModal'
import { EditTodoModal } from './Modals/EditTodoModal/EditTodoModal'

function TodoDetailInner({ currentTodo }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true)
  }

  const openEditModalHandler = () => {
    setIsEditModalOpen(true)
  }
  return (
    <div>
      {JSON.stringify(currentTodo)}

      <button
        onClick={openEditModalHandler}
        type="button"
        className={classNames('btn', 'mx-2', 'btn-warning')}
      >
        Edit
      </button>

      <button
        onClick={openDeleteModalHandler}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
      <DeleteTodoModal
        isOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        title={currentTodo.title}
        id={currentTodo.id}
      />
      <EditTodoModal
        isOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        title={currentTodo.title}
        id={currentTodo.id}
      />
    </div>
  )
}

const TodoDetailInnerWithQuery = withQuery(TodoDetailInner)

export function TodoDetail() {
  const { todoId } = useParams()

  const {
    data: currentTodo,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['TodosDetail', todoId],
    // queryFn: () => fetch(`http://localhost:3005/todos/${todoId}`)
    //   .then(() => { throw new Error('bbhghfhjjjjjjjjj') }),
    queryFn: () => fetch(`http://localhost:3005/todos/${todoId}`).then((res) => res.json()),
    enabled: todoId !== undefined,
  })

  return (
    <TodoDetailInnerWithQuery
      currentTodo={currentTodo}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  )
}
