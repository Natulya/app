import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { TodoListContextProvider } from './contexts/TodoListContextProvider'
import { ContactsPage } from './components/Pages/ContactsPage/ContactsPage'
import { TodosPage } from './components/Pages/TodosPage/TodosPage'
import { TodoDetail } from './components/TodoDetail/TodoDetail'
import { TodosCreate } from './components/TodosCreate/TodosCreate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'todos',
        element: <TodosPage />,
      },
      {
        path: 'todos/:todoId',
        element: <TodoDetail />,
      },
      {
        path: 'todos/create',
        element: <TodosCreate />,
      },
    ],
  },
], { basename: '/app' })

// const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <TodoListContextProvider>
      <RouterProvider router={router} />
    </TodoListContextProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
