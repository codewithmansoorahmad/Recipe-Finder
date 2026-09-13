import { getSearchRecipe } from "../services/api";

export default function RecipesHero({
  recipe,
  setRecipe,
  filterCusine,
  setFilterCusine,
  cookTime,setCookTime,
  setResults,
  difficuilty, setDifficuilty,
  setErr
}) {
  const handleSubmit=async()=>{
    if(recipe.trim()==="")return;


    const data=await getSearchRecipe(recipe)
    if(data.recipes.length===0){
      setErr("No Recipe Found")

    setResults(null)
return

    }
    setResults(data.recipes)
setErr("")
    
  }
  return (
    <div className="recipes-hero">
      <h1>Recipes</h1>
      <p>Find Something delicious to cook </p>
      <input
        type="text"
        placeholder="Search your recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button onClick={handleSubmit}>search</button>

      <div className="recipes-select">
        <div className="filter">
          <label htmlFor="select-1">Causine</label>

          <select
            id="select-1"
            value={filterCusine}
            onChange={(e) => setFilterCusine(e.target.value)}
          > 
            <option value="All">All</option>
            <option value="Asian">asian</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Mditerranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Indian">Indian</option>
            <option value="Japenese">Japenese</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Korean">Korean</option>
            <option value="Greek">Greek</option>
            <option value="Thai">Thai</option>
            <option value="Turkish">Turkish</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Brazilian">Brazilian</option>
          </select>
        </div>
        <div className="diifficulty">
          <label htmlFor="select-2">Difficuilty</label>
          <select id="select-2" value={difficuilty} onChange={(e)=>setDifficuilty(e.target.value)} >
            <option value="All">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="time">
          <label htmlFor="select-3">Cooking Time</label>

          <select id="select-3" value={cookTime} onChange={(e)=>setCookTime(e.target.value)}>
            <option value="All">All</option>

            <option value="15">under !5 minutes</option>
            <option value="30">under 30 minutes</option>
            <option value="60">under 60 minutes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
