const express = require('express')
const routes = express.Router()

const {recipes} = require('./data')

const RecipesController = require('./app/controllers/RecipesController')

// Admin
routes.get('/admin', (req,res) => res.redirect(301, '/admin/recipes'))
routes.get('/admin/recipes', RecipesController.index);
routes.get('/admin/recipes/create', RecipesController.create);
routes.get('/admin/recipes/:id', RecipesController.show);
routes.get('/admin/recipes/:id/edit', RecipesController.edit);

// routes.post('/admin/recipes', RecipesController.post)
// routes.put('/admin/recipes', RecipesController.put)
// routes.delete('/admin/recipes', RecipesController.delete)

// Public
routes.get('/', (req, res) => res.render('public/index', { recipes }))
routes.get('/recipes', (req, res) => res.render('public/recipes/index', { recipes }))
routes.get('/recipes/:recipe_index', (req, res) => { 
    const { recipe_index } = req.params  
    const recipe = recipes[recipe_index]

    res.render('public/recipes/show', { recipe })
})
routes.get('/about', (req, res) => res.render('public/about'))


module.exports = routes