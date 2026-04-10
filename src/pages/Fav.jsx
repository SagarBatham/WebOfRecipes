import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../component/RecipeCard';

const Fav = () => {
  const data = JSON.parse(localStorage.getItem("Favourites")) || []

  const renderrecipes = Array.isArray(data) ? data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  )) : []

  return (
    <div className='page-transition'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-white mb-2'>❤️ My Favorites</h1>
        <p className='text-gray-400'>Your saved favorite recipes</p>
      </div>

      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max'>
          {renderrecipes}
        </div>
      ) : (
        <div className='text-center py-12 bg-zinc-800 rounded-lg'>
          <p className='text-xl text-gray-400'>No Favorites Yet!</p>
          <p className='text-sm text-gray-500 mt-2'>Start adding recipes to your favorites</p>
        </div>
      )}
    </div>
  )
}

export default Fav