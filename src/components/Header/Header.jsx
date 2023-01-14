import { memo } from 'react'
import { Link } from 'react-router-dom'
import headerStyle from './header.module.css'

function Header() {
  console.log('Render Header')
  return (
    <header className={headerStyle.wr}>
      <nav>
        <ul className={headerStyle.headerMenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const HeaderMemo = memo(Header)
