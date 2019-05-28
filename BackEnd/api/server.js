// IMPORTS
    const express = require('express')
    const cors = require('cors')

// ROUTERS
    const usersRouter = require('./usersRouter')
    const projectsRouter = require('./projectsRouter')
    const objectivesRouter = require('./objectivesRouter')
    const todosRouter = require('./todosRouter')
    const tasksRouter = require('./tasksRouter')

// SERVER 
    const server = express()
    server.use(cors())
    server.use(express.json())


// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: "HomeBase Server Is WORKING!! :)"})
    })

// INDIVIDUAL ROUTES
    server.use('/api/users', usersRouter)
    server.use('/api/projects', projectsRouter)
    server.use('/api/objectives', objectivesRouter)
    server.use('/api/todos', todosRouter)
    server.use('/api/tasks', tasksRouter)

// EXPORTS
    module.exports = server
