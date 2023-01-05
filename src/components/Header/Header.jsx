import { Form } from './components/Form'
import headerStyle from './header.module.css'

export function Header({ addNewTodo }) {
  return (
    <header className={headerStyle.wr}>
      <Form addNewTodo={addNewTodo} />
    </header>
  )
}
