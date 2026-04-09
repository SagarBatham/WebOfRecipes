import React, { createContext, useEffect, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

  const [data, setdata] = useState([])

useEffect(()=>{
  const stored = localStorage.getItem("Recipes");
  setdata(stored ? JSON.parse(stored) : [])
}, [])

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext