import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-x-10'>
      <NavLink to="/" className={(e)=>e.isActive && "text-red-300"}>Home</NavLink>
      <NavLink  to="/about" className={(e)=>e.isActive && "text-red-300"} >About</NavLink>
      <NavLink to="/recipes" className={(e)=>e.isActive && "text-red-300"}>Recipes</NavLink>
      <NavLink to="/create" className={(e)=>e.isActive && "text-red-300"}>Create Recipes</NavLink>
    </div>

  )
}

export default Nav