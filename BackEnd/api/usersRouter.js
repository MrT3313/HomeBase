// IMPORTS
    const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //
    router.get('/', async (req,res) => {
        console.log('usersRouter GET/')

        DB_knexVersion('users')
            .then( users => {
                res.status(200).json(users)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/users/ --> Could not get all users"})
            })
    })
    router.get('/:id', async (req,res) => {
        console.log('usersRouter GET/:id')
        const { id } = req.params

        DB_knexVersion('users')
            .where('userID', id)
            .then( user => {
                res.status(200).json(user)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/:id --> Could not get USER ${id}`})
            })
    })

// - POST - //
    /*
    ACCEPTED SHAPE:
    {
        "firstName": "New", 
        "lastName": "User",
        "type": "customer",
        "phone": "1233214321",
        "address": "All The Streets"
    }
    */
    router.post('/', async (req,res) => {
        console.log('usersRouter POST/')

        DB_knexVersion('users')
            .insert(req.body)
                .then( results => {
                    res.status(201).json(results)
                })
                .catch( () => {
                    res.status(500).json({ error: `POST/ --> Could not INSERT new user`})
                })
    })

// - PUT - //
    /*
    ACCEPTED SHAPE:
        {
            "firstName": "NewEDITED",
            "lastName": "UserEDITED",
            "type": "customerEDITED",
            "phone": "1233214321EDITED",
            "address": "All The StreetsEDITED"
        }
    */
    router.put('/:id', async(req,res) => {
        console.log('usersRouter PUT/:id')
        const { id } = req.params

        const updateData = req.body
            updateData.userID = id
            console.log(updateData)

        DB_knexVersion('users')
            .where('userID', id)
            .update(updateData)
                .then( updatedUser => {
                    if (updatedUser) {
                        res.status(200).json(updatedUser)
                    } else {
                        res.status(404).json({ error: `PUT/:id --> user ID ${id} not found`})
                    }
                })
                .catch( () => {
                    res.status(500).json({ error: `PUT/:id --> could not update user`})
                })
            
    })
// - DELETE - //

// EXPORTS
    module.exports = router
