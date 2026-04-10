import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

function Home() {

  const { data = [] } = useContext(recipecontext);

  const renderrecipes = Array.isArray(data) ? data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  )) : []

  return (
    <div className='page-transition'>
      <div className='mb-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-8 text-center animate-fadeIn'>
        <h1 className='text-5xl font-bold mb-3 text-white'>🍽️ Recipe Collection</h1>
        <p className='text-xl text-white opacity-90'>
          Discover delicious recipes from around the world
        </p>
      </div>
      <div>
        <h2 className='text-3xl font-bold mb-6 text-white'>Featured Recipes</h2>
        {data.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max'>
            {renderrecipes}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-400'>Loading delicious recipes...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home