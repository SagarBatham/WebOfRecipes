import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const{id,images,titles,chefname,desc="",categories,ingr}=props.recipe || {}
  return (
    <Link to={`/recipes/detail/${id}`} className='block h-full'>
      <div className='bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col'>
        <div className='relative overflow-hidden w-full aspect-video bg-zinc-900'>
          <img 
            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' 
            src={images} 
            alt="Recipe"
          />
        </div>
        <div className='p-5 flex flex-col flex-grow'>
          <div className='flex items-center justify-between mb-3'>
            <span className='text-xs bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full font-bold uppercase'>
              {categories}
            </span>
          </div>
          <h2 className='text-lg font-bold text-white mb-2 line-clamp-2 h-14'>{titles}</h2>
          <p className='text-sm text-orange-400 font-semibold mb-2'>👨‍🍳 {chefname}</p>
          <p className='text-sm text-gray-300 mb-4 line-clamp-2 flex-grow h-10'>
            {desc}
          </p>
          <div className='text-xs text-gray-400 border-t border-zinc-600 pt-3'>
            <span className='font-semibold'>🥘 Ingredients:</span>
            <p className='line-clamp-1 text-gray-400'>{ingr}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard