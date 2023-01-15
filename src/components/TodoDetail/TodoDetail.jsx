import classNames from 'classnames'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import { DeleteTodoModal } from './Modals/DeleteTodoModal/DeleteTodoModal'
import { EditTodoModal } from './Modals/EditTodoModal/EditTodoModal'

export function TodoDetail() {
  const { todoId } = useParams()
  const { getTodoById } = useTodoListMethodsContext()
  const currentTodo = getTodoById(todoId)
  console.log({ currentTodo })

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
        className={classNames(
          'btn',
          'mx-2',
          'btn-warning',
        )}
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
