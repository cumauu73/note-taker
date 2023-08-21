const router = require('express').Router()
const viewRoutes = require('./show')
const noteApiRoutes = require('./notes')

// api routes
router.use('/api', noteApiRoutes)

// view routes
router.use('/', viewRoutes)

module.exports = router