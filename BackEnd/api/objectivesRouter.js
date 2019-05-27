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
    router.get('/:id', async (req,res) => {
        console.log('objectivesRouter GET/:id')
        const { id } = req.params

        DB_knexVersion('objectives')
            .where('objectiveID', id)
            .then( objective => {
                res.status(200).json(objective)
            })
            .catch( () => {
                res.status(500).json({error: `GET/:id --> Could not get OBJECTIVE ${id}`})
            })
    })

// - POST - //
    /*
    ACCEPTED SHAPE:
    {
        "objectiveStatus": "Active",
        "objectiveTitle": "NEWLY ADDED",
        "userID": 1
    }
    */
    router.post('/', async(req,res) => {
        DB_knexVersion('objectives')
            .insert(req.body)
                .then( results => {
                    res.status(201).json(results)
                })
                .catch(() => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new objective`})
                })
    })

// - PUT - //
    /*
    ACCEPTED SHAPE:

    */
    router.put('/:id', async(req,res) => {
        console.log('objectivesRouter PUT/:id')
        const { id } = req.params

        const updateData = req.body
            updateData.objectiveID = id
            console.log(updateData)

        DB_knexVersion('objectives')
            .where('objectiveID', id)
            .update(updateData)
                .then( updatedUser => {
                    if (updatedUser) {
                        res.status(200).json(updatedUser)
                    } else {
                        res.status(404).json({ error: `PUT/:id --> objective ID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({ error: `PUT/:id --> could not update objective`})
                })
    })
// - DELETE - //
    router.delete('/:id', async (req,res) => {
        console.log("objectivesRouter DELETE/:id")
        const { id } = req.params

        DB_knexVersion('objectives')
            .where('objectiveID', id)
            .del()
                .then( results => {
                    if (results) {
                        res.status(200).json(results)
                    } else {
                        res.status(404).json({ error: `DELETE/:id --> objectiveID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({error: 'DELETE/:id --> could not delete objective'})
                })
    })

// EXPORTS
    module.exports = router