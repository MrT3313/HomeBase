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
    /* 
    ACCEPTED SHAPE
        {
            "startTime": "11:11",
            "endTime": "11:11",
            "type": "TEST",
            "todoID": null,
            "objectiveID": null
        }
    */
    router.put('/:id', async(req,res) => {
        console.log('tasksRouter PUT/:id')
        const { id } = req.params

        const updateData = req.body
            updateData.taskID = id
            console.log(updateData)

        DB_knexVersion('tasks')
            .where('taskID', id)
            .update(updateData)
                .then( updatedUser => {
                    if (updatedUser) {
                        res.status(200).json(updatedUser)
                    } else {
                        res.status(404).json({ error: `PUT/:id --> task ID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({ error: `PUT/:id --> could not update task`})
                })
    })
// - DELETE - //
    router.delete('/:id', async (req,res) => {
        console.log("tasksRouter DELETE/:id")
        const { id } = req.params

        DB_knexVersion('tasks')
            .where('taskID', id)
            .del()
                .then( results => {
                    if (results) {
                        res.status(200).json(results)
                    } else {
                        res.status(404).json({ error: `DELETE/:id --> taskID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({error: 'DELETE/:id --> could not delete task'})
                })
    })

// EXPORTS
    module.exports = router