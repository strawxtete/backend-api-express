import express from 'express'
import { getUsersController } from '../controllers/user/getUsersController.js'
import { createUsersController } from '../controllers/user/createUserController.js'
import { updateUsersController } from '../controllers/user/updateUserController.js'
import { updateAvatarUserController } from '../controllers/user/updateAvatarUserController.js'
import { deleteUsersController } from '../controllers/user/deleteUserController.js'

const router = express.Router()

router.get('/', getUsersController)
router.post('/', createUsersController)
router.put('/', updateUsersController)
router.patch('/', updateAvatarUserController)
router.delete('/', deleteUsersController)

export default router