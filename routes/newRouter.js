const {newPost} = require('../controller/newController')
const { Router } = require('express')



const newRouter = Router()


newRouter.get('/', newPost)


module.exports = newRouter