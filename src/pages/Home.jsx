import axios from '../utils/axios'
import React, { useEffect, useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'

function Home() {
  const { data, setdata } = useContext(recipecontext);

  const fetchdata=async()=>{
    try{
        const {data}=await axios.get("/products")
        console.log(data);
        setdata(data);
    }
    catch(error){
      console.log(error); 
    }
  }

  useEffect(()=>{
    fetchdata();
  }, [])

  

  return (
    <div>
      <h1>Data</h1>
      <button onClick={fetchdata}>Get Product</button>
    </div>
  )
}

export default Home