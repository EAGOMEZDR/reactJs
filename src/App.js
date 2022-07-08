
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Cart  from './components/Cart/Cart';
import { CartContextProvider } from './context/cartContext';
import { Checkout } from './components/Checkout/Checkout';




function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route index path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route  path="/detalle/:id" element={<ItemDetailContainer/>} />
        <Route  path='/cart' element={ <Cart />} />
        <Route path='/checkout' element ={<Checkout/>} />
        {/* <Route  path='/cart' element={ <ItemCount stock={15} initial={1} onAdd={"0"} />} /> */}
        {/* <Route  path='*' element={<Navigate to="/" />} /> */}
      </Routes>


    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App;
