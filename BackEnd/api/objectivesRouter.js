// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //
    // ALL OBJECTIVES
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
    // SINGLE OBJECTIVE
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
    // ALL OBJECTIVES --> SINGLE USER
    router.get('/user/:id', async (req,res) => {
        console.log('objectiveRouter GET/user/:id')
        const { id } = req.params

        DB_knexVersion('objectives')
            .where('userID', id)
                .then( userObjectives => {
                    res.status(200).json(userObjectives)
                })
                .catch( () => {
                    res.status(500).json({ error: `Could not get all of userID:${id} Objectives`})
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
                    // - V1 - //
                        // res.status(201).json(results)
                    
                    // - V2 - //
                        // IF the Delete action was successful
                        // make a NEW DB call to get the updated list of objectives 
                        // & send to the front end
                        DB_knexVersion('objectives')
                        .then( objectives => {
                            res.status(200).json(objectives)
                        })
                        .catch( () => {
                            res.status(500).json({ error: "GET api/objectives/ --> Could not get all objectives"})
                        })
                })
                .catch(() => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new objective`})
                })
    })

// - PUT - //
    /*
    ACCEPTED SHAPE:
        {
            "objectiveID": 1,
            "objectiveStatus": "Active",
            "objectiveTitle": "Read",
            "userID": 1
        }
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
                .then( updatedObjective => {
                    if (updatedObjective) {
                        res.status(200).json(updatedObjective)
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
                        // IF the Delete action was successful
                        // make a NEW DB call to get the updated list of objectives 
                        // & send to the front end
                        DB_knexVersion('objectives')
                        .then( objectives => {
                            res.status(200).json(objectives)
                        })
                        .catch( () => {
                            res.status(500).json({ error: "GET api/objectives/ --> Could not get all objectives"})
                        })
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