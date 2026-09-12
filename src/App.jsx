import Header from "./pages/Header"
import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Favorites from "./pages/Favorites"
function App() {

  return (
    <>
    
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
     </Routes>
          
              
    </>
  )
}

export default App
