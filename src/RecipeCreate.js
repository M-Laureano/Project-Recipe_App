import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    addRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Photo URL:</td>
            <td>
              <input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
