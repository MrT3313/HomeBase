// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('tasksRouter GET/')

        DB_knexVersion('tasks')
            .then( tasks => {
                res.status(200).json(tasks)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/tasks/ --> Could not get all tasks"})
            })
    })

// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router