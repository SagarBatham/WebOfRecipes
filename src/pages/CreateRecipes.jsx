import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipes = () => {
    const navigate=useNavigate();
    const {data,setdata}=useContext(recipecontext)
    const { register, handleSubmit,reset } = useForm();
    const handler=(recipe)=>{
        recipe.id=nanoid();
        
        const copydata=[...data];
        copydata.push(recipe)
        setdata(copydata)
        localStorage.setItem("Recipes", JSON.stringify(copydata));
        toast.success("Recipe Created")
        reset()
        navigate("/recipes");
    }

    return (
        <div className='page-transition max-w-2xl mx-auto'>
            <div className='bg-zinc-800 rounded-lg p-8 border border-zinc-700 animate-fadeIn'>
                <h1 className='text-4xl font-bold text-white mb-2'>🍳 Create New Recipe</h1>
                <p className='text-gray-400 mb-6'>Share your delicious recipe with the community</p>
                
                <form onSubmit={handleSubmit(handler)} className='space-y-5'>
                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Image URL</label>
                        <input type="url"
                            {...register("images")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none'
                            placeholder='Enter image url' />
                        <small className='text-gray-500'>Use a valid image URL from web</small>
                    </div>

                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Recipe Title</label>
                        <input type="text"
                            {...register("titles")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none'
                            placeholder='Recipe Title' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Chef Name</label>
                        <input type="text"
                            {...register("chefname")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none'
                            placeholder='Enter Chef Name' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Description</label>
                        <textarea 
                            {...register("desc")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none h-24 resize-none'
                            placeholder='Tell us about your recipe...' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Category</label>
                        <select 
                            {...register("categories")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white focus:border-red-500 focus:outline-none'>
                            <option value="breakfast">🌅 Breakfast</option>
                            <option value="lunch">🍽️ Lunch</option>
                            <option value="supper">🥘 Supper</option>
                            <option value="dinner">🍽️ Dinner</option>
                        </select>
                    </div>

                    <div>
                        <label className='text-sm text-gray-400 block mb-2'>Ingredients</label>
                        <textarea 
                            {...register("ingr")}
                            className='w-full bg-zinc-700 border border-zinc-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none h-24 resize-none'
                            placeholder='List ingredients separated by commas' />
                        <small className='text-gray-500'>Example: flour, eggs, milk, butter</small>
                    </div>

                    <button 
                        type='submit'
                        className='w-full py-3 px-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl' 
                    >
                        ✨ Create Recipe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipes