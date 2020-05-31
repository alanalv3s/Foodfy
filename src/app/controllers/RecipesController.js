const data = require('../../data.json')
const fs = require('fs')

const { recipes } = data

class RecipesController {
    index (req, res) {
        return res.render('admin/recipes/index', { recipes })
    }

    create (req, res) {
        return res.render('admin/recipes/create')
    }

    show(req, res) {
        const recipe = recipes[req.params.id]
        if (!recipe) return res.send("Receita não encontrada!")

        return res.render('admin/recipes/show', { recipe: { id: req.params.id, ...recipe }})
    }

    edit(req, res) {
        const recipe = recipes[req.params.id]
        if (!recipe) return res.send("Receita não encontrada!")

        return res.render('admin/recipes/edit', { recipe: { id: req.params.id, ...recipe }})
    }

    // post(req,res) {
    //     try {
    //         // Validate req.body

    //         const { image, title, author, ingredients, preparation, information } = req.body
    //         const recipe = { image, title, author, ingredients, preparation, information }
    //         recipes.push(recipe)

    //         fs.writeFile("src/data.json", JSON.stringify(data, null, 2))
    //     }
    // }
}

module.exports = new RecipesController()