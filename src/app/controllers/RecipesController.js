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
}

module.exports = new RecipesController()