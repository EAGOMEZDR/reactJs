
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';




function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route index path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route  path="/detalle/:id" element={<ItemDetailContainer/>} />
        <Route  path='/cart' element={ <ItemCount stock={15} initial={1} onAdd={"0"} />} />
        {/* <Route  path='*' element={<Navigate to="/" />} /> */}
      </Routes>


    </BrowserRouter>
    </>
  )
}

export default App;
