import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (index) => {
    setRecipes((prevRecipes) => prevRecipes.filter((_, i) => i !== index));
  };

  const createRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
