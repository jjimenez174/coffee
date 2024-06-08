import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/shop",
        element: <Shop />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />

)
