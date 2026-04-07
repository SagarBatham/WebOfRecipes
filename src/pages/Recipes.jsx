import React, { useContext } from 'react'
import { recipecontext} from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

function Recipes() {
  const {data}=useContext(recipecontext);
  console.log(data);
  
  const renderrecipes=data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className='flex gap-3 flex-wrap'>
      {data.length>0?renderrecipes:"No Recipes Found!!"}
    </div>
  )
}

export default Recipes