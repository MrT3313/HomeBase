// IMPORTS
    const express = require('express')

// IMPORTING KNEX VERSION OF DB
    const DB_knexVersion = require('../data/dbConfig')

// ROUTER 
    const router = express.Router()

// - GET - //
    router.get('/', async (req,res) => {
        console.log('userRouter GET/')

        DB_knexVersion('users')
            .then( users => {
                res.status(200).json(users)
            })
            .catch( () => {
                res.status(500).json({ error: "GET api/users/ --> Could not get all users"})
            })
    })
    router.get('/:id', async (req,res) => {
        console.log('userRouter GET/:id')
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
        console.log('userROuter POST/')

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
// - DELETE - //

// EXPORTS
    module.exports = router
