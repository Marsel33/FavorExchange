require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


const index = require('./routes/index');

const PORT = 3001;
const app = express();


app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true,}));
app.use(cookieParser());

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use(
    session({
      name:'sid',
      store: new FileStore({}),
      saveUninitialized: false,
      secret: 'lalalalal',
      resave: false,
    })
);


app.use('/', index);

app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})



// module.exports = app
