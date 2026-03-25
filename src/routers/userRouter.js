import express from 'express'
import { getUsersController } from '../controllers/user/getUsersController.js'
import { createUsersController } from '../controllers/user/createUserController.js'
import { updateUsersController } from '../controllers/user/updateUserController.js'
import { updateAvatarUserController } from '../controllers/user/updateAvatarUserController.js'
import { deleteUsersController } from '../controllers/user/deleteUserController.js'

const router = express.Router()

router.get('/', getUsersController)
router.post('/', createUsersController)
router.put('/:id', updateUsersController)
router.patch('/:id', updateAvatarUserController)
router.delete('/:id', deleteUsersController)

export default router