import { memo } from 'react'
import { Form } from './components/Form'
import headerStyle from './header.module.css'

function Header() {
  console.log('Render Header')
  return (
    <header className={headerStyle.wr}>
      <Form />
    </header>
  )
}

export const HeaderMemo = memo(Header)
