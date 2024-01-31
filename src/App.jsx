import './app.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"¡¡Este es el contenedor de items!!"} />
    </>
  );
}

export default App;
