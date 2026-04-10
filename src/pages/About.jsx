import React from 'react'

function About() {
  return (
    <div className='page-transition animate-fadeIn'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-center'>
          <h1 className='text-5xl font-bold mb-2 text-white'>About Web of Recipes</h1>
          <p className='text-xl text-white opacity-90'>Bringing flavors from around the world to your kitchen</p>
        </div>

        <div className='grid gap-8'>
          <div className='bg-zinc-800 rounded-lg p-6 border border-zinc-700'>
            <h2 className='text-2xl font-bold text-red-400 mb-3'>🎯 Our Mission</h2>
            <p className='text-gray-300 leading-relaxed'>
              Web of Recipes is dedicated to sharing authentic and delicious recipes from cuisines around the world. 
              We believe that cooking should be accessible to everyone, whether you're a beginner or an experienced chef.
            </p>
          </div>

          <div className='bg-zinc-800 rounded-lg p-6 border border-zinc-700'>
            <h2 className='text-2xl font-bold text-orange-400 mb-3'>👨‍🍳 What We Do</h2>
            <ul className='text-gray-300 space-y-2 leading-relaxed'>
              <li>✨ Curate recipes from renowned chefs worldwide</li>
              <li>📚 Provide step-by-step cooking instructions</li>
              <li>🌍 Celebrate diverse culinary traditions</li>
              <li>🤝 Build a community of food enthusiasts</li>
              <li>💡 Inspire home cooks to try new dishes</li>
            </ul>
          </div>

          <div className='bg-zinc-800 rounded-lg p-6 border border-zinc-700'>
            <h2 className='text-2xl font-bold text-green-400 mb-3'>⭐ Why Choose Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300'>
              <div>
                <h3 className='font-bold text-white mb-1'>🔍 Quality Content</h3>
                <p>Carefully selected recipes tested by our community</p>
              </div>
              <div>
                <h3 className='font-bold text-white mb-1'>👥 Expert Chefs</h3>
                <p>Recipes from professional chefs and food experts</p>
              </div>
              <div>
                <h3 className='font-bold text-white mb-1'>📱 User Friendly</h3>
                <p>Easy-to-use interface for smooth browsing</p>
              </div>
              <div>
                <h3 className='font-bold text-white mb-1'>❤️ Community</h3>
                <p>Join thousands of cooking enthusiasts</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center'>
            <h2 className='text-2xl font-bold text-white mb-2'>Let's Cook Together!</h2>
            <p className='text-white opacity-90'>Have a recipe to share? Want to collaborate?</p>
            <p className='text-white font-semibold mt-3'>📧 contact-shivsagar6912@gmail.com</p>
            <p>Made by - Sagar Batham</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About