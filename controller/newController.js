const asyncHandler = require ('express-async-handler')


const createPost = asyncHandler(async (req, res) => {
    res.render('form')
})



module.exports = { createPost}