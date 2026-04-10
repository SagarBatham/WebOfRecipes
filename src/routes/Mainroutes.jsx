import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipes from '../pages/CreateRecipes'
import SingleRecipe from '../pages/Singlerecipe'
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const Mainroutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/recipes' element={<Recipes />} ></Route>
                 <Route path='/recipes/detail/:id' element={<SingleRecipe />} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/create' element={<CreateRecipes />} ></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
                <Route path='/fav' element={<Fav/>}></Route>
            </Routes>
    )
}

export default Mainroutes