const { Router } = require('express')
const { index, newPost, userPost } = require('../controller/indexController')

const indexRouter = Router()


indexRouter.get('/', index)
indexRouter.post('/new', newPost)
indexRouter.get('/:id', userPost )

module.exports = indexRouter