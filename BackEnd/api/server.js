// IMPORTS
    const express = require('express')

// ROUTERS
    const usersRouter = require('./usersRouter')
// SERVER 
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: "HomeBase Server Is WORKING!! :)"})
    })

// INDIVIDUAL ROUTES
    server.use('api/users', usersRouter)

// EXPORTS
    module.exports = server
