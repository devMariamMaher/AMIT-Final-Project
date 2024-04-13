import React from 'react'
import "./App.scss"
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Popup } from './components/Popup'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { CartProvider } from './hooks/CartContext'
import{ Provider } from "react-redux"
import { store } from './store/store'
import { Toaster } from "react-hot-toast"
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Products } from './pages/Products'

const App = () => {
  const Routing = createBrowserRouter([
    {path:"/", element: <Layout/>, children:[
      {index: true, element: <Home/>},
      {path:"/login", element: <Login/>},
      {path:"/signup", element: <Register/>},
      {path:"/product-details/:id", element: <ProductDetails/>},
      {path:"/cart", element: <Cart/>},
      {path:"/products", element: <Products/>},
    ]}
  ])

  return (
    <>
    <Provider store={store}>
      <Toaster position='top-center'/>
        <CartProvider>
            {/* <Popup/> */}
          <RouterProvider router={Routing}>
          </RouterProvider>
        </CartProvider>
    </Provider>
    </>
  )
}

export default App