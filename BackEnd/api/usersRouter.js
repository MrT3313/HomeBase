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

// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router
