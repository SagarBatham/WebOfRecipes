import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
  const testRecipe = {
    id: "123abc",
    images: "https://images.unsplash.com/photo-1604908811783-0f6f7a0c0c0c",
    titles: "Paneer Butter Masala",
    chefname: "John Doe",
    desc: "A rich and creamy North Indian curry made with paneer, butter, and tomato gravy. Best served with naan or rice.",
    categories: "dinner",
    ingr: "paneer, butter, tomato, cream, onion, garlic, spices"
  };

  const [data, setdata] = useState([])
  console.log(data);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext