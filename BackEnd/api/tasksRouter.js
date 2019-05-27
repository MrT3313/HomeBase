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
    router.get('/:id', async (req,res) => {
        console.log('tasksRouter GET/:id')
        const { id } = req.params

        DB_knexVersion('tasks')
            .where('taskID', id)
            .then( task => {
                res.status(200).json(task)
            })
            .catch( () => {
                res.status(500).json({error: `GET/:id --> Could not get OBJECTIVE ${id}`})
            })
    })

// - POST - //
    /*
    ACCEPTED SHAPE:

    */
    router.post('/', async(req,res) => {
        DB_knexVersion('tasks')
            .insert(req.body)
                .then( results => {
                    res.status(200).json(results)
                })
                .catch( () => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new task`})
                })
    })

// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router