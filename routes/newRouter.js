const {createPost} = require('../controller/newController')
const { Router } = require('express')



const newRouter = Router()


newRouter.get('/', createPost)


module.exports = newRouter