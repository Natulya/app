import classNames from 'classnames'
import { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <NavLink
              className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
              to="/todos"
            >
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const HeaderMemo = memo(Header)
