import Header from "./pages/Header"
import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Favorites from "./pages/Favorites"
import {  lazy, Suspense, useEffect, useState } from "react"
import { callApi } from "./services/api"
import { ContexData } from "./ContextData/context"
const SinglePageRecipe=lazy(()=>import("./pages/SinglePageRecipe"))

function App() {
  const [recipes, setRecipes] = useState([]);
  const [err, setErr] = useState("");
  const [results, setResults] = useState(null);
  const [recipe, setRecipe] = useState("");
   const [popularRecipes,setPoPularRecipes]=useState([])

      

     useEffect(() => {
          async function getRecipes() {
            try {
              const data = await callApi(30);
              setRecipes(data.recipes);
              setPoPularRecipes(data.recipes.slice(0,6))

            } catch (error) {
              setErr(error.message);
            }
          }
          getRecipes();

        }, []);


  return (
    <>
    {/* <ScrollTop/> */}
      <ContexData.Provider value={{recipes,results}}>

     <Routes>

      <Route element={<Header/>}>

      <Route path="/" element={<Home err={err} setRecipe={setRecipe} setResults={setResults} setPopularRecipes={setPoPularRecipes} popularRecipes={popularRecipes} />}/>
      <Route path="/recipes" element={<Recipes results={results} setResults={setResults} err={err} setErr={setErr} recipes={recipes} setRecipes={setRecipes} recipe={recipe} setRecipe={setRecipe}/>}/>
      <Route path="/favorites" element={<Favorites/>}/>

      </Route>
      <Route path="/recipes/:id" element={
        <Suspense fallback={<h1>loading...</h1>}>
          <SinglePageRecipe/>
        </Suspense>

      }/>

     </Routes>
      </ContexData.Provider>


          
              
    </>
  )
}

export default App
