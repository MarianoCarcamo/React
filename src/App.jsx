import 'react-toastify/dist/ReactToastify.css'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import Cart from './components/Cart'
import CartWidget from './components/CartWidget'
import Checkout from './components/Checkout'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import NotFound from './components/NotFound'
import { CarritoProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element = {<ItemListContainer/>} />
          <Route path='/category/:idcategory' element = {<ItemListContainer/>} />
          <Route path='/product/:idproduct' element = {<ItemDetailsContainer/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element = {<Checkout/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
        <CartWidget/>
        <Footer/>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
