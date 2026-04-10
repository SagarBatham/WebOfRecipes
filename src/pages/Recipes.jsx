import React, { useContext, useEffect } from 'react'
import { recipecontext} from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

function Recipes() {
  const {data=[]}=useContext(recipecontext);
  
  const renderrecipes = Array.isArray(data) ? data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  )) : []

  return (
    <div className='page-transition'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-white mb-2'>All Recipes</h1>
        <p className='text-gray-400'>Browse through all available recipes</p>
      </div>
      
      {data.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max'>
          {renderrecipes}
        </div>
      ) : (
        <div className='text-center py-12 bg-zinc-800 rounded-lg'>
          <p className='text-xl text-gray-400'>No Recipes Found!!</p>
        </div>
      )}
    </div>
  )
}

export default Recipes