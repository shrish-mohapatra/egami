const express = require('express')
const { get, create, edit, remove } = require('../resolvers/image.resolve')

const { uploadImage } = require('../../utilities/cloudStorage')
const tempStorage = require('../../utilities/tempStorage')

const router = express.Router()

router.get('/', get)
router.post('/', tempStorage.single('upload'), uploadImage, create)
router.put('/', edit)
router.delete('/', remove)

module.exports = router