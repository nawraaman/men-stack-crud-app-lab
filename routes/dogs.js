// routes/dogs.js
const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogs')

router.get('/dogs', dogController.index)
router.get('/dogs/new', dogController.new)
router.post('/dogs', dogController.create)
router.get('/dogs/:id', dogController.show)
router.get('/dogs/:id/edit', dogController.edit)
router.put('/dogs/:id', dogController.update)
router.delete('/dogs/:id', dogController.delete)

module.exports = router
