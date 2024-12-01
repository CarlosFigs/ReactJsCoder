import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
  <NavBar/>
  <ItemListContainer saludo ={"texto"} num ={4} />
    </>
  )
}

export default App
