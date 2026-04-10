import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../component/RecipeCard';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';


const SingleRecipe = () => {
  const { data = [], setdata } = useContext(recipecontext);
  const [favState, setFavState] = React.useState(false);

  const navigate = useNavigate();
  const param = useParams();
  const recipe = Array.isArray(data) ? data.find((recipe) => param.id == recipe.id) : null;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      titles: recipe?.titles,
      images: recipe?.images,
      chefname: recipe?.chefname,
      desc: recipe?.desc,
      categories: recipe?.categories,
      ingr: recipe?.ingr
    }
  });

  useEffect(() => {
    return () => {}
  }, [])

  const updateHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => param.id == recipe.id);
    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...recipe };
    setdata(copydata)
    axios.post('http://localhost:5000/api/recipes', copydata);
    localStorage.setItem("Recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated")
  }

  const DeletHandler = () => {
    const filterData = data.filter(r => r.id != param.id)
    setdata(filterData)
    axios.post('http://localhost:5000/api/recipes', filterData);
    toast.success("Recipe Deleted")
    navigate("/recipes")
  }

  const getFavs = () => {
    const data = JSON.parse(localStorage.getItem("Favourites"));

    if (!data) return [];

    return Array.isArray(data) ? data : [data];
  };

  const addtoFav = () => {
    const fav = getFavs();

    if (!fav.find(e => e.id == recipe.id)) {
      fav.push(recipe);
      localStorage.setItem("Favourites", JSON.stringify(fav));
      setFavState(true);
      toast.success("Recipe added to Favourites ❤️");
    }
  };

  const remFav = () => {
    const favs = getFavs();
    const updatedFav = favs.filter(f => f.id != recipe.id);

    localStorage.setItem("Favourites", JSON.stringify(updatedFav));
    setFavState(false);
    toast.success("Removed from favourites 💔");
  };


  useEffect(() => {
    const favs = getFavs();
    const exist = favs.some(f => f.id == recipe?.id);
    setFavState(exist);
  }, [recipe]);

  return recipe ? (
    <div className='page-transition max-w-6xl mx-auto'>
      <div className='relative mb-8 animate-fadeIn'>
        <div className='relative w-full h-96 rounded-xl overflow-hidden shadow-2xl'>
          <img 
            className='w-full h-full object-cover' 
            src={recipe.images} 
            alt={recipe.titles}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
            <div className='flex items-start justify-between'>
              <div>
                <h1 className='text-5xl font-bold mb-2'>{recipe.titles}</h1>
                <div className='flex gap-4 text-lg'>
                  <div className='flex items-center gap-2'>
                    <span>👨‍🍳</span>
                    <span className='text-orange-300 font-semibold'>{recipe.chefname}</span>
                  </div>
                  <div className='flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full'>
                    <span>📂</span>
                    <span className='uppercase font-bold text-sm'>{recipe.categories}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={favState ? remFav : addtoFav}
                className='text-6xl transition-transform duration-300 hover:scale-110 animate-pulse'
              >
                {favState ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-1 space-y-6'>
          <div className='bg-zinc-800 rounded-lg p-6 border border-zinc-700 animate-fadeIn'>
            <h3 className='text-2xl font-bold text-white mb-3'>📝 Overview</h3>
            <p className='text-gray-300 leading-relaxed'>{recipe.desc}</p>
          </div>

          <div className='bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 border border-red-600 border-opacity-30 animate-fadeIn'>
            <h3 className='text-2xl font-bold text-white mb-4'>🥘 Ingredients</h3>
            <div className='space-y-3'>
              {recipe.ingr.split(',').map((ingredient, idx) => (
                <div key={idx} className='flex items-center gap-3 p-2 bg-zinc-700 rounded'>
                  <span className='text-orange-400'>✓</span>
                  <span className='text-gray-200'>{ingredient.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 bg-zinc-800 rounded-lg p-8 border border-zinc-700 animate-fadeIn'>
          <h2 className='text-3xl font-bold text-white mb-2'>✏️ Edit Recipe</h2>
          <p className='text-gray-400 mb-6'>Update recipe details below</p>
          
          <form onSubmit={handleSubmit(updateHandler)} className='space-y-5'>
            <div className='grid md:grid-cols-2 gap-5'>
              <div>
                <label className='text-sm font-semibold text-gray-300 block mb-2'>📸 Image URL</label>
                <input type="url"
                  {...register("images")}
                  className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition'
                  placeholder='Enter image url' />
              </div>

              <div>
                <label className='text-sm font-semibold text-gray-300 block mb-2'>👨‍🍳 Chef Name</label>
                <input type="text"
                  {...register("chefname")}
                  className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition'
                  placeholder='Enter Chef Name' />
              </div>
            </div>

            <div>
              <label className='text-sm font-semibold text-gray-300 block mb-2'>🍴 Recipe Title</label>
              <input type="text"
                {...register("titles")}
                className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition'
                placeholder='Recipe Title' />
            </div>

            <div>
              <label className='text-sm font-semibold text-gray-300 block mb-2'>📝 Description</label>
              <textarea 
                {...register("desc")}
                className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition h-28 resize-none'
                placeholder='Tell us about this recipe...' />
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
              <div>
                <label className='text-sm font-semibold text-gray-300 block mb-2'>📂 Category</label>
                <select 
                  {...register("categories")}
                  className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition' >
                  <option value="breakfast">🌅 Breakfast</option>
                  <option value="lunch">🍽️ Lunch</option>
                  <option value="supper">🥘 Supper</option>
                  <option value="dinner">🍽️ Dinner</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-semibold text-gray-300 block mb-2'>⏱️ Prep Time</label>
                <input type="text"
                  placeholder='e.g., 15 mins'
                  className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition'
                />
              </div>
            </div>

            <div>
              <label className='text-sm font-semibold text-gray-300 block mb-2'>🥘 Ingredients (comma separated)</label>
              <textarea 
                {...register("ingr")}
                className='w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none transition h-28 resize-none'
                placeholder='e.g., flour, eggs, milk, butter' />
            </div>

            <div className='flex gap-4 pt-6 border-t border-zinc-700'>
              <button 
                type="submit"
                className='flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
              >
                ✅ Update Recipe
              </button>
              <button 
                type="button"
                onClick={DeletHandler}
                className='flex-1 py-3 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
              >
                🗑️ Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center py-20'>
      <div className='animate-spin mb-4'>
        <span className='text-6xl'>🍳</span>
      </div>
      <p className='text-2xl text-gray-400'>Loading recipe...</p>
    </div>
  )
}

export default SingleRecipe