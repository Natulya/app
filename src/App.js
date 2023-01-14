import './App.css'
import { Outlet } from 'react-router-dom'
import { HeaderMemo as Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  console.log('Render App')

  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  )
}

export default App
