const express = require('express')
const { get, create, edit, remove } = require('../resolvers/image.resolve')

const { uploadImage } = require('../../utilities/cloudStorage')
const tempStorage = require('../../utilities/tempStorage')

const router = express.Router()

router.get('/get', get)
router.post('/create', tempStorage.single('upload'), uploadImage, create)
router.put('/edit', edit)
router.delete('/remove', remove)

module.exports = router