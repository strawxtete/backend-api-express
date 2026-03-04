import express from 'express'
import { getPostController } from '../controllers/post/getPostsController.js'
import { createPostController } from '../controllers/post/createPostController.js'
import { updatePostController } from '../controllers/post/updatepostController.js'
import { updateNamePostController } from '../controllers/post/updateNamePostController.js'
import { deletePostController } from '../controllers/post/deletePostController.js'

const router = express.Router()

router.get('/', getPostController)
router.post('/', createPostController)
router.put('/', updatePostController)
router.patch('/', updateNamePostController)
router.delete('/', deletePostController)

export default router