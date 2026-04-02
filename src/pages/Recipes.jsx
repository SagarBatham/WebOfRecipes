import React, { useContext } from 'react'
import { recipecontext} from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

function Recipes() {
  const {data}=useContext(recipecontext);
  console.log(data);
  
  const renderrecipes=data.map((recipe)=>(
    <RecipeCard key={recipe.id}></RecipeCard>
  ))
  return (
    <div>
      {renderrecipes}
    </div>
  )
}

export default Recipes