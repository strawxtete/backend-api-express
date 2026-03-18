import express from 'express'
import { getPubliController } from '../controllers/publi/getPubliController.js'
import { createPubliController } from '../controllers/publi/createPubliController.js'
import { updatePubliController } from '../controllers/publi/updatePubliController.js'
import { updateNamePubliController } from '../controllers/publi/updateNamePubliController.js'
import { deletePubliController } from '../controllers/publi/deletePubliController.js'

const router = express.Router()

router.get('/', getPubliController)
router.post('/', createPubliController)
router.put('/', updatePubliController)
router.patch('/', updateNamePubliController)
router.delete('/', deletePubliController)

export default router