import Header from "./pages/Header"
import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Favorites from "./pages/Favorites"
import SinglePageRecipe from "./pages/SinglePageRecipe"
function App() {

  return (
    <>
    
     <Routes>
      <Route element={<Header/>}>

      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/favorites" element={<Favorites/>}/>

      </Route>
      <Route path="/recipes/:id" element={<SinglePageRecipe/>}/>

     </Routes>

          
              
    </>
  )
}

export default App
