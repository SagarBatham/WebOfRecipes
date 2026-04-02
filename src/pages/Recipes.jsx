import React, { useContext } from 'react'
import { recipecontext} from '../context/RecipeContext'

function Recipes() {
  const {data}=useContext(recipecontext);
  console.log(data);
  
  const renderrecipes=data.map((recipe)=>(
    <div key={recipe.id}>
      <h1>{recipe.titles}</h1>
    </div>
  ))
  return (
    <div>
      {renderrecipes}
    </div>
  )
}

export default Recipes