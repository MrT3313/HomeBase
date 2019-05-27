// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('todosRouter GET/')

        DB_knexVersion('todos')
            .then( todos => {
                res.status(200).json(todos)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/todos/ --> Could not get all todos"})
            })
    })
    router.get('/:id', async (req,res) => {
        console.log('todosRouter GET/:id')
        const { id } = req.params
        DB_knexVersion('todos')
            .where( 'todoID', id)
            .then( todo => {
                res.status(200).json(todo)
            })
            .catch( () => {
                res.status(500).json({error: `GET/:id --> Could not get OBJECTIVE ${id}`})
            })
    })

// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router