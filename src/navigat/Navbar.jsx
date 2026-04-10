import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/recipes', label: 'Recipes', icon: '📖' },
    { path: '/create', label: 'Create', icon: '➕' },
    { path: '/fav', label: 'Favorites', icon: '❤️' }
  ];

  return (
    <nav className='bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-lg py-4 px-6 sticky top-4 z-50 animate-slideIn'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <span className='text-2xl'>🍳</span>
          <h1 className='text-2xl font-bold text-white'>Web of Recipes</h1>
        </div>
        
        <div className='hidden md:flex justify-center gap-8 flex-1 mx-8'>
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              className={({isActive}) => `flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-white text-red-600 font-bold' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-white text-2xl focus:outline-none'
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className='md:hidden mt-4 flex flex-col gap-3 bg-red-700 bg-opacity-50 p-4 rounded-lg'>
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-white text-red-700 font-bold' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav