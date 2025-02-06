const path = require('node:path')
const express = require('express')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

const app = express()

const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true}))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')




app.use('/', indexRouter)
app.use('/new', newRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http//:localhost:${PORT}`)
})
