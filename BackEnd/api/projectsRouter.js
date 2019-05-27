// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('projectRouter GET/')

        DB_knexVersion('users')
            .then( projects => {
                res.status(200).json(projects)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/projects/ --> Could not get all projects"})
            })
    })

// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router