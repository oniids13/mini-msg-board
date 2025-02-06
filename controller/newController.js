const asyncHandler = require ('express-async-handler')


const newPost = asyncHandler(async (req, res) => {
    res.render('form')
})



module.exports = { newPost}