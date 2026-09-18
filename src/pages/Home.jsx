import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

import "../css/Home.css";
import LoadingPage from "../components/LoadingPage";
const PopularRecipes = lazy(() => import("../components/PopularRecipes"));
export default function Home({ setRecipe, setResults, popularRecipes }) {
  return (
    <div className="home">
      <Hero />

      {popularRecipes.length > 0 && (
        <Suspense fallback={<LoadingPage />}>
          <PopularRecipes
            popularRecipes={popularRecipes}
            setRecipe={setRecipe}
            setResults={setResults}
          />
        </Suspense>
      )}
    </div>
  );
}
