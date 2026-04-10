import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Allow CORS for frontend requests
app.use(cors());
app.use(express.json());

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all recipes from JSON file
app.get('/api/recipes', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'recipes.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const recipes = JSON.parse(data);
    res.json(recipes);
  } catch (error) {
    console.error('Error reading recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Update recipes in JSON file
app.post('/api/recipes', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'recipes.json');
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.json({ success: true, message: 'Recipes updated' });
  } catch (error) {
    console.error('Error writing recipes:', error);
    res.status(500).json({ error: 'Failed to update recipes' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
