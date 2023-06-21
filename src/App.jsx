
import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from '../Context'
import './App.css'
import Layout from './components/Layout'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Products from './pages/Products'


function App() {

  return (
    <ContextProvider>
    <Routes>
      <Route element={<Layout/>}>
      <Route index path="/" element={<Products />}/>
      <Route  path="/cart" element={<Cart />}/>
      <Route  path="/favorite" element={<Favorite />}/>
      </Route>
    </Routes>
    </ContextProvider>
  )
}

export default App
