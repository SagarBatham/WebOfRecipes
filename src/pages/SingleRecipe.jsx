import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../component/RecipeCard';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SingleRecipe = () => {
  const { data=[], setdata } = useContext(recipecontext);
  
  const navigate = useNavigate();
  const param = useParams();
  const recipe = Array.isArray(data) ? data.find((recipe) => param.id == recipe.id) : null;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      titles: recipe?.titles,
      images:recipe?.images,
      chefname:recipe?.chefname,
      desc: recipe?.desc,
      categories: recipe?.categories,
      ingr: recipe?.ingr
    }
  });


  useEffect(()=>{
    console.log("Mount");
    return()=>{
    console.log("Unmount");  
    }
  },[])

  // const handler = (recipe) => {
  //   const copydata = [...data];
  //   copydata.push(recipe)
  //   reset()
  // }

  
  
  const submitHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => param.id == recipe.id);
    console.log(recipeIndex);

    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...recipe };
    setdata(copydata)
    toast.success("Recipe Updated")
  }

  const DeletHandler = () => {
    const filterData = data.filter(r => r.id != param.id)
    setdata(filterData)
    toast.success("Recipe Deleted")
    navigate("/recipes")
  }
JSON.parse(localStorage.getItem("Recipes"))
const updateHandler=()=>{
      localStorage.setItem("Recipes",JSON.stringify(recipe))
  }



  return recipe ? <div className='flex justify-between'>
    <div id='left' className='w-1/2 h-full'>
      <h1 className='text-5xl mt-4'>{recipe.titles}</h1>
      <img className='mt-4 rounded overflow-hidden w-[50%] h-[50%] object-cover' src={recipe.images} alt="" />
      <h2 className='mt-4 text-red-500 font-bold'>{recipe.chefname}</h2>
      <p className='mt-3'>{recipe.desc}</p>
      <h4 className='mt-2'>{recipe.categories.toUpperCase()}</h4>
      <h4 className='mt-2'>({recipe.ingr})</h4>
    </div>
    <div id='right' className='w-1/2 h-full mt-2'>
      <form onSubmit={handleSubmit(submitHandler)}>
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
          className='block border-b outline-0 p-2 h-20 text-sm'
          placeholder='Start from here...' />
        {/* <small className='text-red-400'>This is how the Error is shown</small> */}

        <select type="text" 
          {...register("categories")}
          className='block border-b outline-0 p-2 text-black'
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

        <button className='block py-1 px-4 bg-blue-800 rounded mt-4 ' onClick={updateHandler} >Update Recipe</button>
        <button className='block py-1 px-4 bg-red-400 rounded mt-4' onClick={DeletHandler}>Delete Recipe</button>


      </form>
    </div>
  </div> : "Loading...!!"
}

export default SingleRecipe