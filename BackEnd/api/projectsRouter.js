// IMPORTS
const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //

    router.get('/', async (req,res) => {
        console.log('projectsRouter GET/')

        DB_knexVersion('projects')
            .then( projects => {
                res.status(200).json(projects)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/projects/ --> Could not get all projects"})
            })
    })
    router.get('/:id', async (req,res) => {
        console.log('projectsRouter GET/:id')
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
    /*
    ACCEPTED SHAPE:
    {
        "projectDescription": "EDITED - dskjgak",
        "projectTitle": "EDITED - sdfasdkfh",
        "dueDate": "9/1/18",
        "userID": 2
    }
    */
    router.put('/:id', async(req,res) => {
    console.log('projectsRouter PUT/:id')
    const { id } = req.params

    const updateData = req.body
        updateData.projectID = id
        console.log(updateData)

    DB_knexVersion('projects')
        .where('projectID', id)
        .update(updateData)
            .then( updatedUser => {
                if (updatedUser) {
                    res.status(200).json(updatedUser)
                } else {
                    res.status(404).json({ error: `PUT/:id --> project ID ${id} not found`})
                }
            })
            .catch( () => {
                res.status(500).json({ error: `PUT/:id --> could not update project`})
            })
})
// - DELETE - //
    router.delete('/:id', async (req,res) => {
        console.log("projectsRouter DELETE/:id")
        const { id } = req.params

        DB_knexVersion('projects')
            .where('projectID', id)
            .del()
                .then( results => {
                    if (results) {
                        res.status(200).json(results)
                    } else {
                        res.status(404).json({ error: `DELETE/:id --> projectID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({error: 'DELETE/:id --> could not delete project'})
                })
    })

// EXPORTS
    module.exports = router