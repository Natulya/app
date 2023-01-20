import { memo } from 'react'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import footerStyles from './footer.module.css'

export const Footer = memo(() => {
  console.log('Render Footer')
  const { clearAllTodos } = useTodoListMethodsContext()

  const clearAllHandler = () => {
    clearAllTodos()
  }

  return (
    <footer className={footerStyles.wr}>
      <div>
        <button onClick={clearAllHandler} type="button" className="btn btn-primary">
          Clear all
        </button>
      </div>
    </footer>
  )
})
