// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('projectRouter GET/')

        DB_knexVersion('projects')
            .then( projects => {
                res.status(200).json(projects)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/projects/ --> Could not get all projects"})
            })
    })
    router.get('/:id', async (req,res) => {
        console.log('projectROuter GET/:id')
        const { id } = req.params

        DB_knexVersion('projects')
            .where('projectID', id)
            .then( project => {
                res.status(200).json(project)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/:id --> Could not get PROJECT ${id}`})
            })
    })

// - POST - //
    /*
    ACCEPTED SHAPE:
    {
        "versionID": 1,
        "projectDescription": "THE NEWEST PROJECT EVER",
        "projectTitle": "Mr.T UPGRADED",
        "dueDate": "4/3/2918",
        "userID": 1
    }
    */
    router.post('/', async (req,res) => {
        DB_knexVersion('projects')
            .insert(req.body)
                .then( results => {
                    res.status(201).json(results)
                })
                .catch( () => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new project`})
                })
    })

// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router