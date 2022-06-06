
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';




function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer/>

    <ItemCount stock={15} initial={1} />

    </>
  )
}

export default App;
