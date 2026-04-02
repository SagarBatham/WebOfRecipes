import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';

const CreateRecipes = () => {
    const {data,setdata}=useContext(recipecontext)
    const { register, handleSubmit,reset } = useForm();
    const handler=(recipe)=>{
        recipe.id=nanoid();
        console.log(recipe); 
        
        const copydata=[...data];
        copydata.push(recipe)
        setdata(copydata)

        reset()
    }



    return (
        <div>
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
                    {...register("description")}
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
                    {...register("ingredients")}
                    className='block border-b outline-0 p-2 h-20 text-sm'
                    placeholder='Write your ingredients with comma seperated' />
                {/* <small className='text-red-400'>This is how the Error is shown</small> */}

                <button className='block py-1 px-3 bg-gray-400 rounded mt-4' >Create Recipe</button>

            </form>
        </div>
    )
}

export default CreateRecipes