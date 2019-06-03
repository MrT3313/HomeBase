// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //
    // ALL TODOS
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
    // SINGLE TODO
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
    // ALL TODOS --> SINGLE USER
    router.get('/user/:id', async (req,res) => {
        console.log('todosRouter GET/user/:id')
        const { id } = req.params

        DB_knexVersion('todos')
            .where('userID', id)
                .then( userTodos => {
                    res.status(200).json(userTodos)
                })
                .catch( () => {
                    res.status(500).json({ error: 'Could not get all of userID:${id} Todos'})
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
    router.delete('/:id', async (req,res) => {
        console.log("todosRouter DELETE/:id")
        const { id } = req.params

        DB_knexVersion('todos')
            .where('todoID', id)
            .del()
                .then( results => {
                    if (results) {
                        res.status(200).json(results)
                    } else {
                        res.status(404).json({ error: `DELETE/:id --> todoID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({error: 'DELETE/:id --> could not delete todo'})
                })
    })

// EXPORTS
    module.exports = router