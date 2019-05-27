// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('objectivesRouter GET/')

        DB_knexVersion('objectives')
            .then( objectives => {
                res.status(200).json(objectives)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/objectives/ --> Could not get all objectives"})
            })
    })

// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router