import Header from "./pages/Header"
import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Favorites from "./pages/Favorites"
import { lazy, Suspense } from "react"
// import SinglePageRecipe from "./pages/SinglePageRecipe"
const SinglePageRecipe=lazy(()=>import("./pages/SinglePageRecipe"))
function App() {

  return (
    <>
    
     <Routes>
      <Route element={<Header/>}>

      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/favorites" element={<Favorites/>}/>

      </Route>
      <Route path="/recipes/:id" element={
        <Suspense fallback={<h1>loading...</h1>}>
          <SinglePageRecipe/>
        </Suspense>
      }/>

     </Routes>

          
              
    </>
  )
}

export default App
