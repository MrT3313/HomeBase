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
    /*
    ACCEPTED SHAPE:
        {
            "todoDescription": "NEW DESCRIPTION",
            "todoTitle": "NEWLY ADDED",
            "date": "5/19/28",
            "userID": 1
        }
    */
    router.post('/',async(req,res) => {
        DB_knexVersion('todos')
            .insert(req.body)
                .then( results => {
                    res.status(200).json(results)
                })
                .catch( () => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new todo`})
                })
    })

// - PUT - //
    /* 
    ACCEPTED SHAPE
        {
            "todoDescription": "EDIT",
            "todoTitle": "EDITED",
            "date": "5/19/28",
            "userID": 1
        }
    */
    router.put('/:id', async(req,res) => {
        console.log('todosRouter PUT/:id')
        const { id } = req.params

        const updateData = req.body
            updateData.todoID = id
            console.log(updateData)

        DB_knexVersion('todos')
            .where('todoID', id)
            .update(updateData)
                .then( updatedUser => {
                    if (updatedUser) {
                        res.status(200).json(updatedUser)
                    } else {
                        res.status(404).json({ error: `PUT/:id --> todo ID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({ error: `PUT/:id --> could not update todo`})
                })
    })
// - DELETE - //

// EXPORTS
    module.exports = router