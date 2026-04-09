import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const{id,images,titles,chefname,desc="",categories,ingr}=props.recipe || {}
  return (
    <Link className='block w-[30%]' to={`/recipes/detail/${id}`}>
    <img className='hover:scale-98 duration-50 mt-5 rounded overflow-hidden object-cover w-[70%] h-[70%] border' src={images} alt="not Found"/>
    <h1 className='text-xl text-bold'>{titles}</h1>
    <small className='text-lg text-red-500'>{chefname}</small>
    <p className=' text-sm'>
        {desc?.slice(0,100)}...{" "}
        <small className='text-blue-400'>more</small>
    </p>
    </Link>
  )
}

export default RecipeCard