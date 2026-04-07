import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../component/RecipeCard';


const SingleRecipe = () => {
  const { data } = useContext(recipecontext);
  const param = useParams();
  console.log(data, param.id);
  const recipe = data.find((recipe) => param.id == recipe.id);
  console.log(recipe);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))

  return recipe ? <div>
    <div id='left' className='w-1/2 h-full'>
      <h1 className='text-5xl mt-4'>{recipe.titles}</h1>
      <img className='mt-4 rounded overflow-hidden w-[50%] h-[50%] object-cover' src={recipe.images} alt="" />
      <h2 className='mt-4 text-red-500 font-bold'>{recipe.chefname}</h2>
      <p className='mt-3'>{recipe.desc}</p>
      <h4 className='mt-2'>{recipe.categories.toUpperCase()}</h4>
      <h4 className='mt-2'>({recipe.ingr})</h4>
    </div>
    <div id='right' className='w-1/2 h-full'>
      <form onSubmit={handleSubmit(handler)}>
        <input type="url"
          {...register("images")}
          className='block border-b outline-0 p-2'
          placeholder='Enter image url' />

        <small className='text-red-400'>This is how the Error is shown</small>

        <input type="text"
          {...register("titles")}
          className='block border-b outline-0 p-2'
          placeholder='Recipe Title' />


        <input type="text"
          {...register("chefname")}
          className='block border-b outline-0 p-2'
          placeholder='Enter Chef Name' />

        {/* <small className='text-red-400'>This is how the Error is shown</small> */}

        <textarea type="text"
          {...register("desc")}
          className='block border-b outline-0 p-2 h-20'
          placeholder='Start from here...' />
        {/* <small className='text-red-400'>This is how the Error is shown</small> */}

        <select type="text"
          {...register("categories")}
          className='block border-b outline-0 p-2 h-20'
          placeholder='Select category of your recipe' >

          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <textarea type="text"
          {...register("ingr")}
          className='block border-b outline-0 p-2 h-20 text-sm'
          placeholder='Write your ingredients with comma seperated' />
        {/* <small className='text-red-400'>This is how the Error is shown</small> */}

        <button className='block py-1 px-3 bg-gray-400 rounded mt-4' >Create Recipe</button>

      </form>
    </div>
  </div> : "Loading...!!"
}

export default SingleRecipe