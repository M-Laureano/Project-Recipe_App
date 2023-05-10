import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
          {/* <td><label htmlFor="name">Name:</label></td> */}
            <td>
              <input name="name" type="text" placeholder="Name" value={recipe.name} onChange={handleChange} required />
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" value={recipe.cuisine} onChange={handleChange} required />
            </td>
            <td>
              <input name="photo" type="url" placeholder="URL" value={recipe.photo} onChange={handleChange} required />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" value={recipe.ingredients} onChange={handleChange} required />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" value={recipe.preparation} onChange={handleChange} required />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>






          </tr>
          
            
         
          
            
         
          <tr>
            <td></td>
           
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
