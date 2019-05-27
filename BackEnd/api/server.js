// IMPORTS
    const express = require('express')

// ROUTERS
    const usersRouter = require('./usersRouter')
    const projectsRouter = require('./projectsRouter')
// SERVER 
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: "HomeBase Server Is WORKING!! :)"})
    })

// INDIVIDUAL ROUTES
    server.use('/api/users', usersRouter)
    server.use('/api/projects', projectsRouter)

// EXPORTS
    module.exports = server
