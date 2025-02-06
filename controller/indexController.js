

const asyncHandler = require ('express-async-handler')

const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
        id: 3,
        text: 'Wassup Niggas!',
        user: 'Nigga Warrior',
        added: new Date()
    },
  ];



const index = asyncHandler(async (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages })
})


const newPost = asyncHandler(async (req, res) => {
  const {author, msg} = req.body
  const newId = messages.length + 1

  messages.push({ text: msg, user: author, added: new Date(), id: newId})

  res.redirect('/')
})

const userPost = asyncHandler(async (req, res) => {
  const id  = Number(req.params.id)

  const post = messages.find(msg => msg.id === id)

  res.render('singlepost', { post: post })
})


module.exports = { index, newPost, userPost }