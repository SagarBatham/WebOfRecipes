# 🍳 Web of Recipes

A beautiful, modern recipe sharing web application built with React and Tailwind CSS. Discover, create, and manage your favorite recipes with smooth animations and an intuitive user interface.

## ✨ Features

- **📖 Browse Recipes** - Explore a collection of delicious recipes from around the world
- **❤️ Save Favorites** - Add recipes to your favorites for quick access
- **➕ Create Recipes** - Share your own recipes with the community
- **✏️ Edit & Delete** - Manage your recipes with easy-to-use controls
- **📱 Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **🎨 Beautiful UI** - Modern dark theme with smooth animations and transitions
- **💾 Local Storage** - Your recipes persist even after closing the browser
- **⚡ Fast & Lightweight** - Optimized performance with instant loading

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 4 + Vite
- **State Management:** React Context API
- **Forms:** React Hook Form
- **Notifications:** React Toastify
- **HTTP Client:** Axios
- **ID Generation:** nanoid
- **Build Tool:** Vite

## 📋 Pages

- **Home** - Showcase featured recipes with hero section
- **Recipes** - Browse all available recipes in a responsive grid
- **Recipe Detail** - View complete recipe details and edit/delete options
- **Create Recipe** - Add new recipes to the collection
- **Favorites** - Access your saved favorite recipes
- **About** - Learn about Web of Recipes mission and values

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/WebOfRecipes.git
cd WebOfRecipes
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
```

## 📂 Project Structure

```
src/
├── component/
│   └── RecipeCard.jsx
├── context/
│   └── RecipeContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── SingleRec.jsx
│   ├── CreateRecipes.jsx
│   ├── Fav.jsx
│   ├── About.jsx
│   └── PageNotFound.jsx
├── routes/
│   └── Mainroutes.jsx
├── navigat/
│   └── Navbar.jsx
├── App.jsx
└── main.jsx
```

## 🎨 Features Highlight

### Responsive Grid Layout
- 1 column on mobile
- 2 columns on tablets
- 3-4 columns on desktop
- Auto-sizing cards with proper spacing

### Smooth Animations
- Page fade-in transitions
- Card hover effects with scale animation
- Smooth scrolling behavior
- Loading animations

### Professional Design
- Dark modern theme with gradients
- Consistent color scheme (red/orange accents)
- Emoji icons for better UX
- Professional typography

## 💾 Data Persistence

- Recipes stored in static `recipes.json` in public folder
- Favorites saved to browser's localStorage
- Changes persist across sessions
- Falls back to localStorage if data loading fails

## 🌐 Deployment

Deployed on **Vercel** - [View Live Demo](https://recipesbysagar.vercel.app)

The application is optimized for serverless deployment and uses static JSON data for maximum compatibility.

## 📝 Usage

1. **Browse** - Explore recipes on the home or recipes page
2. **Save** - Click the heart icon to add recipes to favorites
3. **Create** - Navigate to "Create" to add your own recipe
4. **Edit** - Click on any recipe to view details and make changes
5. **Delete** - Remove recipes you no longer want

## 🔄 Local Storage Structure

- **Favourites** - Stores user's favorite recipes
- **Recipes** - Stores all recipes (backup)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [Sagar Batham](https://github.com/SagarBatham)

## 🙏 Acknowledgments

- UI inspiration from modern recipe apps
- Beautiful images from Unsplash
- React and Tailwind CSS communities

---

**Last Updated:** April 10, 2026
