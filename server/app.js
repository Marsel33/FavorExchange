require('dotenv').config()
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const PORT = process.env.PORT || 3000
const index = require('./src/routes/index')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const fileUpload = require('express-fileupload')
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))

app.use(express.static(path.join(process.env.PWD, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())

const sessionConfig = {
  store: new FileStore(),
  key: 'musicCookie',
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
}

const sessionParser = session(sessionConfig)
app.use(sessionParser)

hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'))
// hbs.registerHelper('checkAuthor', function (value, value2) {
//   return value == value2
// })

app.use((req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId
    res.locals.userEmail = req.session.userEmail
    res.locals.userName = req.session.userName
  }
  next()
})

app.use('/', index)


app.listen(PORT, () => {
  console.log(`Server has been started on PORT: ${PORT}`)
})
