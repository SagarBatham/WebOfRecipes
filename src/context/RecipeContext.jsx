import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

  const [data, setdata] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        setdata(response.data);
        localStorage.setItem("Recipes", JSON.stringify(response.data));
      } catch (error) {

        const stored = localStorage.getItem("Recipes");
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            const parsedData = Array.isArray(parsed) ? parsed : [parsed];
            setdata(parsedData);
          } catch (err) {
            setdata([]);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
  }, [])

  return (
    <recipecontext.Provider value={{ data, setdata, isLoading }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext