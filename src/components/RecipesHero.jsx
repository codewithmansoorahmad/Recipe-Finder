import { useEffect } from "react";
import { getSearchRecipe } from "../services/api";

export default function RecipesHero({
  recipe,
  setRecipe,
  filterCusine,
  setFilterCusine,
  setResults,
  difficuilty,
  setDifficuilty,
  setErr,
  searcErr,
  setSearchErr,
}) {
  useEffect(() => {
    if (recipe.trim() === "") {
      setSearchErr("");
      setResults(null);
    }
  }, [recipe]);

  const handleSubmit = async () => {
    if (recipe.trim() === "") return;

    const data = await getSearchRecipe(recipe);
    if (data.recipes.length === 0) {
      setSearchErr("No Recipe Found with this " + recipe + " name");
      setResults(null);
      return;
    }
    setResults(data.recipes);
    setErr("");
    setSearchErr("");
    setFilterCusine("All");
  };
  return (
    <div className="recipes-hero">
      <h1>Recipes</h1>
      <p>Find Something delicious to cook </p>
      <div className="input">
        <input
          type="text"
          placeholder="Search your recipe"
          value={recipe}
          onChange={(e) => {
            setRecipe(e.target.value);
          }}
          onKeyDown={(e) => {
            if (recipe.trim() !== "") {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }
          }}
        />
        <button onClick={handleSubmit} className="search-btn">
          search
        </button>
      </div>
      {searcErr ? (
        <p className="search-err" id="err">
          {searcErr}
        </p>
      ) : null}

      <div className="recipes-select">
        <div className="filter">
          <label htmlFor="select-1">Cuisine</label>

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
          <select
            id="select-2"
            value={difficuilty}
            onChange={(e) => setDifficuilty(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
          </select>
        </div>
      </div>
    </div>
  );
}
