import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import MainLayout from './MainLayout/MainLayout'
const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
