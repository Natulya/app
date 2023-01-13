import {
  createContext, useContext, useMemo,
} from 'react'
import { useTodos } from './useTodos'

export const TodoListContext = createContext()
export const TodoListMethodsContext = createContext()

export function TodoListContextProvider({ children }) {
  const {
    todos, ...methods
  } = useTodos()

  const todoListMethods = useMemo(() => methods, [])

  return (
    <TodoListContext.Provider value={todos}>
      <TodoListMethodsContext.Provider value={todoListMethods}>
        {children}
      </TodoListMethodsContext.Provider>
    </TodoListContext.Provider>
  )
}

// eslint-disable-next-line arrow-body-style
export const useTodoListContext = () => {
  return useContext(TodoListContext)
}

// eslint-disable-next-line arrow-body-style
export const useTodoListMethodsContext = () => {
  return useContext(TodoListMethodsContext)
}
